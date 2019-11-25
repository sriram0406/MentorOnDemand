using Microsoft.EntityFrameworkCore;
using MOD.StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;


namespace MOD.StudentLibrary
{
    public class StudentContext : DbContext
    {
        public StudentContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MentorRequest> MentorRequests  { get; set; }
    
    }
}