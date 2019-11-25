using MOD.AuthLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MOD.AuthLibrary.Repositories
{
     public class AccountRepository:IAccountRepository
    {
       MODContext context;
        public AccountRepository(MODContext context)
        {
            this.context = context;
        }
        //public List<UserDto> GetUsers()
        //{
        //    var users = (from u in context.MODUsers
        //                 join r in context.UserRoles on u.Id equals r.UserId
        //                 select new UserDto
        //                 {
        //                     Id = u.Id,
        //                     Email = u.Email,
        //                     Firstname = u.Firstname,
        //                     Lastname = u.Lastname,
        //                     PhoneNumber=u.PhoneNumber,
        //                     Role = r.RoleId,
        //                     Active = u.Active
        //                 });
        //    return users.ToList();
        //}

        public IEnumerable<MODUser> GetUsers()
        {

           return context.MODUsers.ToList();
        }
        public bool BlockUser(string id)
        {
            {
                var userblock = context.MODUsers.SingleOrDefault(u => u.Id == id);
                userblock.Active = !userblock.Active;
            }
            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }
    }
}
