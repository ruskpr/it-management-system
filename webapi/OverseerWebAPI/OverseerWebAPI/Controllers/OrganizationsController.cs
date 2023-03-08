using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OverseerWebAPI.Data;
using OverseerWebAPI.Models;

namespace OverseerWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {
        private readonly OverseerWebAPIContext _context;

        public OrganizationsController(OverseerWebAPIContext context)
        {
            _context = context;
        }

        #region get

        // GET: api/Organizations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organization>>> GetOrganization()
        {
            return await _context.Organizations.ToListAsync();
        }

        // GET: api/Organizations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Organization>> GetOrganization(int id)
        {
            var user = await _context.Organizations.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        #endregion

        #region put

        // PUT: api/Organizations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganization(int id, Organization user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrganizationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        #endregion

        #region post

        // POST: api/Organizations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Organization>> PostOrganization(Organization user)
        {
            _context.Organizations.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrganization", new { id = user.Id }, user);
        }

        #endregion

        #region delete

        // DELETE: api/Organizations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrganization(int id)
        {
            var user = await _context.Organizations.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Organizations.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        #endregion

        private bool OrganizationExists(int id)
        {
            return _context.Organizations.Any(e => e.Id == id);
        }
    }
}
