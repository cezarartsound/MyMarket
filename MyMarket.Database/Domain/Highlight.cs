using MongoDB.Bson.Serialization.Attributes;

namespace MyMarket.Database.Domain
{
    [BsonIgnoreExtraElements]
    public class Highlight
    {
        public string Caption { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string RedirectUrl { get; set; }
    }
}
