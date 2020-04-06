using MyMarket.Database.Domain;
using MyMarket.PresentationWeb.Extensions.Models;
using MerchantDto = MyMarket.PresentationWeb.Models.Merchant;

namespace MyMarket.PresentationWeb.Extensions.Domain
{
    public static class MerchantExtensions
    {
        public static MerchantDto ToDto(this Merchant @this) => new MerchantDto
        {
            Id = @this.Id,
            LogoImageUrl = @this.LogoImageUrl,
            Name = @this.Name,
            Sector = @this.Sector,
            Categories = @this.Categories.ParseCategories(),
        };
    }
}
