namespace MyMarket.Services.Users
{
    public interface ILoggedUser : IUser
    {
        string Token { get; }
        bool IsGuest { get; }
    }
}
