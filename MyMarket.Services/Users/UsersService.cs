using Microsoft.IdentityModel.Tokens;
using MyMarket.Database.Storage;
using MyMarket.Services.Extensions;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MyMarket.Services.Users
{
    public class UsersService : IUsersService
    {
        private static readonly Regex _passwordStrengthRegex = new Regex("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$");

        private readonly IUsersServiceConfiguration _configuration;
        private readonly IUsersStorage _usersStorage;

        public UsersService(IUsersServiceConfiguration configuration, IUsersStorage usersStorage)
        {
            _configuration = configuration;
            _usersStorage = usersStorage;
        }

        private static string GenerateSaltedHash(params string[] salt)
        {
            return Convert.ToBase64String(new SHA256Managed()
                .ComputeHash(Encoding.UTF8.GetBytes(string.Concat(salt))));
        }

        private string GetPasswordHash(string username, string password) => GenerateSaltedHash(
            password, 
            username,
            _configuration.Secret);

        private bool ValidateUserPassword(ILoggedUser user, string password) => user != null && (user.IsGuest
            ? true
            : user.Password == GetPasswordHash(user.Username, password));

        public async Task<ILoggedUser> AuthenticateAsync(string username, string password)
        {
            var isGuest = username == null && password == null;

            var user = isGuest 
                ? CreateNewGuestUser()
                : (await _usersStorage.GetUserAsync(username))?.ToServiceUser();

            if (!ValidateUserPassword(user, password)) return null;

            var key = Encoding.ASCII.GetBytes(_configuration.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateJwtSecurityToken(tokenDescriptor);
            token.Payload[nameof(user.IsGuest)] = user.IsGuest;
            token.Payload[nameof(user.Username)] = user.Username;
            user.Token = $" Bearer {tokenHandler.WriteToken(token)}";

            return user.WithoutPassword();
        }

        private User CreateNewGuestUser() => new User
        {
            Id = -1,
            FirstName = "Guest",
            LastName = "",
            Username = "Guest" + Guid.NewGuid().ToString(),
            IsGuest = true,
        };

        public async Task<SignUpResult> SignUpAsync(IUser newUser)
        {
            if (!_passwordStrengthRegex.IsMatch(newUser.Password))
            {
                return SignUpResult.WeakPassword;
            }

            if((await _usersStorage.GetUserAsync(newUser.Username)) != null)
            {
                return SignUpResult.UsernameInUse;
            }

            await _usersStorage.InsertUserAsync(new Database.Domain.User
            {
                FirstName = newUser.FirstName,
                LastName = newUser.LastName,
                Username = newUser.Username,
                Password = GetPasswordHash(newUser.Username, newUser.Password),
            });

            return SignUpResult.Created;
        }
    }
}
