using MyMarket.Database.Domain;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public interface IUsersStorage
    {
        Task<User> GetUserAsync(string username);
        Task InsertUserAsync(User user);
    }
}
