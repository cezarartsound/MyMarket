using MyMarket.Database.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public interface IProductsStorage
    {
        Task<List<Product>> GetTopSellerProducts(int maxNrItems, int offset = 0);
    }
}
