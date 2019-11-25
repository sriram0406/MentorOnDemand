using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.AdminLibrary.Models;
using MOD.AdminLibrary.Repositories;


namespace MOD.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Admin
        [HttpGet]
        public IActionResult GetSkills()
        {
            var skills = repository.GetSkills();
            if (!skills.Any())
            {
                return NoContent();
            }
            return Ok(skills);
        }


        // GET: api/Admin/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            var skill = repository.GetSkill(id);
            if (skill == null)
            {
                return NotFound();
            }
            return Ok(skill);
        }

        // POST: api/Admin
        [HttpPost]
        public IActionResult Post([FromBody] Skill skill)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddSkill(skill);
                if (result)
                {
                    return Created("AddSkill", skill.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Admin/6
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Skill skill)
        {

            if (ModelState.IsValid && id == skill.Id)
            {
                bool result = repository.UpdateSkill(skill);
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
            var skill = repository.GetSkill(id);
            if (skill == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteSkill(skill);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
