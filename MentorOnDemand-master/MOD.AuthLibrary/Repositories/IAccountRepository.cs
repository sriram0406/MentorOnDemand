using MOD.AuthLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.AuthLibrary.Repositories
{
   public interface IAccountRepository
    {
        IEnumerable<MODUser> GetUsers();
        bool BlockUser(string Id);
    }
}
