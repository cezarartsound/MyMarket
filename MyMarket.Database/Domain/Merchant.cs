using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace MyMarket.Database.Domain
{
    [BsonIgnoreExtraElements]
    public class Merchant
    {
        [BsonId]
        public long Id { get; set; }
        public string Name { get; set; }
        public string LogoImageUrl { get; set; }
        public string Sector { get; set; }
        public string[] Categories { get; set; }
    }
}
