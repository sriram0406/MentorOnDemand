using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MOD.MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;


namespace MOD.MentorLibrary
{
    public class MentorContext : DbContext
    {
        public MentorContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MentorTechnology> MentorTechnologies { get; set; }
    }
}