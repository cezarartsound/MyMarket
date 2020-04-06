using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MyMarket.Database.Storage;
using MyMarket.PresentationWeb.Extensions.Domain;
using MyMarket.PresentationWeb.Models;

namespace MyMarket.PresentationWeb.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private const int _maxNrProductsRead = 3;

        private readonly ILogger<HomeController> _logger;
        private readonly IProductsStorage _productsStorage;
        private readonly IHighlightsStorage _highlightsStorage;
        private readonly IMerchantsStorage _merchantsStorage;

        public HomeController(
            ILogger<HomeController> logger, 
            IProductsStorage productsStorage,
            IHighlightsStorage highlightsStorage,
            IMerchantsStorage merchantsStorage)
        {
            _logger = logger;
            _productsStorage = productsStorage;
            _highlightsStorage = highlightsStorage;
            _merchantsStorage = merchantsStorage;
        }

        [HttpGet()]
        public async Task<HomePageModel> Get()
        {
            var productsTask = _productsStorage.GetTopSellerProducts(_maxNrProductsRead);
            var merchantsTask = _merchantsStorage.GetMerchants();
            var highlightsTask = _highlightsStorage.GetHighlights();

            return new HomePageModel
            {
                Merchants = (await merchantsTask).Select(x => x.ToDto()).ToList(),
                HomepageProducts = (await productsTask).Select(x => x.ToDto()).ToList(),
                HighlightItems = (await highlightsTask).Select(x => x.ToDto()).ToList(),
            };
        }

        [HttpGet("products")]
        public async Task<IEnumerable<Product>> GetProducts([FromQuery] int offset = 0)
        {
            return (await _productsStorage.GetTopSellerProducts(_maxNrProductsRead, offset)).Select(x => x.ToDto());
        }
    }
}
