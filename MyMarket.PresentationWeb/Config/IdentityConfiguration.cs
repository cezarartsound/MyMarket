using MyMarket.Services.Users;

namespace MyMarket.PresentationWeb.Config
{
    public class IdentityConfiguration : IUsersServiceConfiguration
    {
        public string Secret { get; set; }
    }
}
