using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.StudentLibrary.Models
{
    public class MentorRequest
    {
       
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
        [Required]
        public string Studentname { get; set; }
        [Required]
        public long PhoneNumber { get; set; }
        
    }
}
