﻿using System.ComponentModel.DataAnnotations;

namespace MyMarket.PresentationWeb.Models
{
    public class AuthenticateModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
