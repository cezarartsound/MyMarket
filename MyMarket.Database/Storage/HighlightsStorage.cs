using MongoDB.Driver;
using MyMarket.Database.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public class HighlightsStorage : IHighlightsStorage
    {
        private const string _collection = "highlights";
        private readonly IMongoDatabase _db;

        public HighlightsStorage(IMongoDatabase db)
        {
            _db = db;
        }

        public Task<List<Highlight>> GetHighlights()
        {
            return _db.GetCollection<Highlight>(_collection)
                .Find(x => true)
                .ToListAsync();
        }
    }
}
