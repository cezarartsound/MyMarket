using System.Collections.Generic;

namespace MyMarket.PresentationWeb.Models
{
    public class Category
    {
        public string Name { get; set; }
        public IList<Category> SubCategories { get; set; }
    }
}
