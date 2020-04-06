using MongoDB.Driver;
using MyMarket.Database.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public class ProductsStorage : IProductsStorage
    {
        private const string _collection = "products";
        private readonly IMongoDatabase _db;

        public ProductsStorage(IMongoDatabase db)
        {
            _db = db;
        }

        public Task<List<Product>> GetTopSellerProducts(int maxNrItems, int offset = 0)
        {
            return _db.GetCollection<Product>(_collection)
                .Find(x => true)
                .SortByDescending(p => p.Price) // Change to nr of sells
                .Skip(offset)
                .Limit(maxNrItems)
                .ToListAsync();
        }
    }
}
