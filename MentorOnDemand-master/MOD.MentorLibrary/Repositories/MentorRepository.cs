using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MOD.MentorLibrary;
using MOD.MentorLibrary.Models;

namespace MOD.MentorService.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }
        public bool AddMentorTechnology(MentorTechnology mentortech)
        {
            try
            {
                context.MentorTechnologies.Add(mentortech);
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

        public bool DeleteMentorTechnology(MentorTechnology mentortech)
        {
            try
            {
                context.MentorTechnologies.Remove(mentortech);
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

        public MentorTechnology GetMentorTechnology(int id)
        {
            return context.MentorTechnologies.Find(id);
        }

        public IEnumerable<MentorTechnology> GetMentorTechnologyList()
        {
            return context.MentorTechnologies.ToList();
        }

        public bool UpdateMentorTechnology(MentorTechnology mentortech)
        {
            try
            {
                context.MentorTechnologies.Update(mentortech);
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
