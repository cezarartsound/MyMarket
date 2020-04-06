using MyMarket.Database.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyMarket.Database.Storage
{
    public interface IHighlightsStorage
    {
        Task<List<Highlight>> GetHighlights();
    }
}
