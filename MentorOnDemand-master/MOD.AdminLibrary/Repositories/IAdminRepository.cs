using MOD.AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.AdminLibrary.Repositories
{
    public interface IAdminRepository
    {
        bool AddSkill(Skill skill);
        IEnumerable<Skill> GetSkills();
        Skill GetSkill(int id);
        bool DeleteSkill(Skill skill);
        bool UpdateSkill(Skill skill);

    }
}