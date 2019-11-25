using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.MentorLibrary.Models;

namespace MOD.MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MentorController : ControllerBase
    {
        IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/MentorController
        [HttpGet]
        public IActionResult GetMentorTechnologyList()
        {
            var mentortech = repository.GetMentorTechnologyList();
            if (!mentortech.Any())
            {
                return NoContent();
            }
            return Ok(mentortech);
        }

        // GET: api/MentorDetails/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var mentortech = repository.GetMentorTechnology(id);
            if (mentortech == null)
            {
                return NotFound();
            }
            return Ok(mentortech);
        }

        // POST: api/MentorDetails
        [HttpPost]
        public IActionResult Post([FromBody] MentorTechnology mentortech)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddMentorTechnology(mentortech);
                if (result)
                {
                    return Created("AddMentorTechnology", mentortech.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        // PUT: api/MentorDetails/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] MentorTechnology mentortech)
        {

            if (ModelState.IsValid && id == mentortech.Id)
            {
                bool result = repository.UpdateMentorTechnology(mentortech);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var mentortech = repository.GetMentorTechnology(id);
            if (mentortech == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteMentorTechnology(mentortech);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}