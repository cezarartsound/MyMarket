using MyMarket.Database.Domain;
using ProductDto = MyMarket.PresentationWeb.Models.Product;
using System.Globalization;
using MyMarket.PresentationWeb.Extensions.Models;

namespace MyMarket.PresentationWeb.Extensions.Domain
{
    public static class ProductExtensions
    {
        public static ProductDto ToDto(this Product @this) => new ProductDto
        {
            Id = @this.Id,
            Description = @this.Description,
            ImageUrl = @this.ImageUrl,
            MerchantId = @this.MerchantId,
            Name = @this.Name,
            Price = @this.Price,
            PriceFormatted = @this.Price.ToString("C", new CultureInfo("pt-PT")),
            Category = @this.Category.ParseSingleCategory(),
        };
    }
}
