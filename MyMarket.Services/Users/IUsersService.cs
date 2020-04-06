using System.Threading.Tasks;

namespace MyMarket.Services.Users
{
    public interface IUsersService
    {
        Task<ILoggedUser> AuthenticateAsync(string username, string password);
        Task<SignUpResult> SignUpAsync(IUser newUser);
    }
}
