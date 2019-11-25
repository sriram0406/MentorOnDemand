using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MOD.MentorLibrary.Migrations
{
    public partial class mentormigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MentorTechnologies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mentorname = table.Column<string>(nullable: false),
                    Coursename = table.Column<string>(nullable: false),
                    Timeslot = table.Column<int>(nullable: false),
                    FromDate = table.Column<DateTime>(nullable: false),
                    ToDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorTechnologies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MentorTechnologies");
        }
    }
}
