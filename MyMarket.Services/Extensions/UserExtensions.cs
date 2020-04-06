using MyMarket.Services.Users;
using System.Collections.Generic;
using System.Linq;
using StorageUser = MyMarket.Database.Domain.User;

namespace MyMarket.Services.Extensions
{
    public static class UserExtensions
    {
        public static IEnumerable<User> WithoutPasswords(this IEnumerable<User> users)
        {
            return users.Select(x => x.WithoutPassword());
        }

        public static User WithoutPassword(this User user)
        {
            user.Password = null;
            return user;
        }

        public static User ToServiceUser(this StorageUser @this) => new User
        {
            Id = @this.Id,
            FirstName = @this.FirstName,
            LastName = @this.LastName,
            Password = @this.Password,
            Username = @this.Username,
        };
    }
}
