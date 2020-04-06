using MongoDB.Driver;
using MyMarket.Database.Domain;
using System.Threading;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public class UsersStorage : IUsersStorage
    {
        private static SemaphoreSlim _insertSemaphore = new SemaphoreSlim(1, 1);

        private const string _collectionName = "products";
        private readonly IMongoDatabase _db;

        private IMongoCollection<User> _collection { get => _db.GetCollection<User>(_collectionName); }

        public UsersStorage(IMongoDatabase db)
        {
            _db = db;
        }

        public Task<User> GetUserAsync(string username)
        {
            return _collection
                .Find(u => u.Username == username)
                .FirstOrDefaultAsync();
        }

        public async Task InsertUserAsync(User user)
        {
            await _insertSemaphore.WaitAsync();

            try
            {
                user.Id = (await _collection.CountDocumentsAsync(_ => true)) + 1;
                await _collection.InsertOneAsync(user);
            }
            finally
            {
                _insertSemaphore.Release();
            }
        }
    }
}
