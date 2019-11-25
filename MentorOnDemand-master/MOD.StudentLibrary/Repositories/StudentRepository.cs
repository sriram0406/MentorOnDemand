using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MOD.StudentLibrary.Models;

namespace MOD.StudentLibrary.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        StudentContext context;
        public StudentRepository(StudentContext context)
        {
            this.context = context;
        }
        public bool AddMentorRequest(MentorRequest student)
        {
            try
            {
                context.MentorRequests.Add(student);
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

        public bool DeleteMentorRequest(MentorRequest mentortech)
        {
            try
            {
                context.MentorRequests.Remove(mentortech);
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

        public MentorRequest GetStudentRegistered(int id)
        {
            return context.MentorRequests.Find(id);
        }

        public IEnumerable<MentorRequest> GetStudentsRegisteredList()
        {
            return context.MentorRequests.ToList();
        }
    }
}
