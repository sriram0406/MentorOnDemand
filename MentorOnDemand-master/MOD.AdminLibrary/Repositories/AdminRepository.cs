using MOD.AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MOD.AdminLibrary.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }
        public bool AddSkill(Skill skill)
        {

            try
            {
                context.Skills.Add(skill);
                int result = context.SaveChanges();
                if (result == 1)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }


        }

        public bool DeleteSkill(Skill skill)
        {
            try
            {
                context.Skills.Remove(skill);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public Skill GetSkill(int id)
        {
            return context.Skills.Find(id);
        }

        public IEnumerable<Skill> GetSkills()
        {
            return context.Skills.ToList();
        }

        public bool UpdateSkill(Skill skill)
        {
            try
            {
                context.Skills.Update(skill);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
