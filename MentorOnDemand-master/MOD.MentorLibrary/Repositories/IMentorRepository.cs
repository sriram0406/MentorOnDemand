using MOD.MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MOD.MentorService
{
    public interface IMentorRepository
    {

        MentorTechnology GetMentorTechnology(int id);
        IEnumerable<MentorTechnology> GetMentorTechnologyList();
        bool AddMentorTechnology(MentorTechnology mentortech);
        bool UpdateMentorTechnology(MentorTechnology mentortech);
        bool DeleteMentorTechnology(MentorTechnology mentortech);
    }
}
