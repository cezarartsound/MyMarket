using MyMarket.Infrastructure.Context;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace MyMarket.PresentationWeb.Middlewares
{
    public class ContextLoaderMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly UserContext _userContext;

        public ContextLoaderMiddleware(RequestDelegate next, UserContext userContext)
        {
            _next = next;
            _userContext = userContext;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var authHeader = context.Request.Headers["Authorization"].FirstOrDefault();

            if (!string.IsNullOrEmpty(authHeader))
            {
                var token = new JwtSecurityToken(authHeader.Split(new char[] { ' ' }).Last());
                _userContext.IsGuestUser = (bool) token.Payload["IsGuest"];
            }

            await _next(context);
        }
    }
}
