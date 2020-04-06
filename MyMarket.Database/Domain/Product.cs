using MongoDB.Bson.Serialization.Attributes;

namespace MyMarket.Database.Domain
{
    [BsonIgnoreExtraElements]
    public class Product
    {
        [BsonId]
        public long Id { get; set; }
        public long MerchantId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string PriceFormatted { get; set; }
    }
}
