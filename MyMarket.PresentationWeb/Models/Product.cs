namespace MyMarket.PresentationWeb.Models
{
    public class Product
    {
        public long Id { get; set; }
        public long MerchantId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string PriceFormatted { get; set; }
    }
}
