using System.Collections.Generic;

namespace MyMarket.PresentationWeb.Models
{
    public class Merchant
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string LogoImageUrl { get; set; }
        public string Sector { get; set; }
        public IEnumerable<Category> Categories { get; set; }
    }
}
