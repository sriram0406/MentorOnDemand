using MOD.StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.StudentLibrary.Repositories
{
    public interface IStudentRepository
    {
        MentorRequest GetStudentRegistered(int id);
        bool DeleteMentorRequest(MentorRequest mentortech);
        bool AddMentorRequest(MentorRequest student);
        IEnumerable<MentorRequest> GetStudentsRegisteredList();
    }
}
