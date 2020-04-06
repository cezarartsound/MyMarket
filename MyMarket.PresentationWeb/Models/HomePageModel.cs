using System.Collections.Generic;

namespace MyMarket.PresentationWeb.Models
{
    public class HomePageModel
    {
        public IList<HighlightItem> HighlightItems { get; set; }
        public IList<Product> HomepageProducts { get; set; }
        public IList<Merchant> Merchants { get; set; }
    }
}
