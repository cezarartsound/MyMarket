namespace MyMarket.Services.Users
{
    public interface IUser
    {
        long Id { get; }
        string FirstName { get; }
        string LastName { get; }
        string Username { get; }
        string Password { get; }
    }
}
