namespace MyMarket.Services.Users
{
    public class User : ILoggedUser
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public bool IsGuest { get; set; }
    }
}
