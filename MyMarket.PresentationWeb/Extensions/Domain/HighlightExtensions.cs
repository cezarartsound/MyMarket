using MyMarket.Database.Domain;
using MyMarket.PresentationWeb.Models;

namespace MyMarket.PresentationWeb.Extensions.Domain
{
    public static class HighlightExtensions
    {
        public static HighlightItem ToDto(this Highlight @this) => new HighlightItem
        {
            Caption = @this.Caption,
            Description = @this.Description,
            ImageUrl = @this.ImageUrl,
            RedirectUrl = @this.RedirectUrl,
        };
    }
}
