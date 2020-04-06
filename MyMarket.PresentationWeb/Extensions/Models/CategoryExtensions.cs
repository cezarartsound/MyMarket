using MyMarket.PresentationWeb.Models;
using System.Collections.Generic;
using System.Linq;

namespace MyMarket.PresentationWeb.Extensions.Models
{
    public static class CategoryExtensions
    {
        public static Category ParseSingleCategory(this string @this) => @this?
            .Split(new char[] { '>' }, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, Category>(null, (result, curr) => new Category
            {
                Name = curr.Trim(),
                SubCategories = result == null ? null : new List<Category> { result }
            });

        public static IEnumerable<Category> ParseCategories(this string[] @this)
        {
            var ret = new List<Category>();

            foreach(var chainString in @this)
            {
                var names = chainString.Split(new char[] { '>' }, System.StringSplitOptions.RemoveEmptyEntries).Select(s => s.Trim());
                var firstName = names.First();

                var cat = ret.GetOrAdd(
                    c => c.Name == firstName,
                    () => new Category { Name = firstName, SubCategories = new List<Category>() });
                
                foreach (var name in names.Skip(1))
                {
                    cat = cat.SubCategories.GetOrAdd(
                        c => c.Name == name,
                        () => new Category { Name = name, SubCategories = new List<Category>() });
                }
            }

            return ret;
        }
    }
}
