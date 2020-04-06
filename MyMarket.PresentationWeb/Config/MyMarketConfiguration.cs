using MyMarket.Services.Users;

namespace MyMarket.PresentationWeb.Config
{
    public class MyMarketConfiguration
    { 
        public IdentityConfiguration IdentityConfiguration { get; set; }
        public string DatabaseConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
