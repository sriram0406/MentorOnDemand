using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.StudentLibrary.Models;
using MOD.StudentLibrary.Repositories;

namespace MOD.StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudentRepository repository;
        public StudentController(IStudentRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Student
        [HttpGet]
        public IActionResult GetStudentsRegisteredList()
        {
            var student = repository.GetStudentsRegisteredList();
            if (!student.Any())
            {
                return NoContent();
            }
            return Ok(student);
        }

        // GET: api/Student/5
        [HttpGet("{id}", Name = "Get")]

        public IActionResult Get(int id)
        {
            var student = repository.GetStudentRegistered(id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        // POST: api/Student
        [HttpPost]
        public IActionResult Post([FromBody] MentorRequest student)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddMentorRequest(student);
                if (result)
                {
                    return Created("AddSkill", student.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var mentortech = repository.GetStudentRegistered(id);
            if (mentortech == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteMentorRequest(mentortech);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}