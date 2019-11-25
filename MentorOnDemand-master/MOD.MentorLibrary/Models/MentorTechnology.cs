using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.MentorLibrary.Models
{
    public class MentorTechnology
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Mentorname { get; set; }
        [Required]
        public string Coursename { get; set; }
        [Required]
        public int Timeslot { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime FromDate { get; set; }
       
        [Required]
        public DateTime ToDate { get; set; }
    }
}
