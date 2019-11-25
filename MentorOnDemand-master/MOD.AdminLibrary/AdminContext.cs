using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MOD.AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace MOD.AdminLibrary
{
    public class AdminContext : DbContext
    {
        public AdminContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Skill> Skills { get; set; }
        
    }
}
