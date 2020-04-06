using MongoDB.Driver;
using MyMarket.Database.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public class MerchantsStorage : IMerchantsStorage
    {
        private const string _collections = "merchants";
        private readonly IMongoDatabase _db;

        public MerchantsStorage(IMongoDatabase db)
        {
            _db = db;
        }

        public Task<List<Merchant>> GetMerchants()
        {
            return _db.GetCollection<Merchant>(_collections)
                .Find(x => true)
                .ToListAsync();
        }
    }
}
