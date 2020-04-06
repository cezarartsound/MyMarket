using System;
using System.Collections.Generic;
using System.Linq;

namespace MyMarket.PresentationWeb.Extensions
{
    public static class IListExtensions
    {
        public static T GetOrAdd<T>(this IList<T> @this, Func<T, bool> predicate, Func<T> createNew)
        {
            var ret = @this.FirstOrDefault(predicate);

            if (ret == null)
            {
                ret = createNew();
                @this.Add(ret);
            }

            return ret;
        }
    }
}
