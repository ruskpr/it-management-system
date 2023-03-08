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
    public class TicketCommentsController : ControllerBase
    {
        private readonly OverseerWebAPIContext _context;

        public TicketCommentsController(OverseerWebAPIContext context)
        {
            _context = context;
        }

        #region get

        // GET: api/TicketComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketComment>>> GetTicketComment()
        {
            return await _context.TicketComments.ToListAsync();
        }

        // GET: api/TicketComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketComment>> GetTicketComment(int id)
        {
            var user = await _context.TicketComments.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        #endregion

        #region put

        // PUT: api/TicketComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketComment(int id, TicketComment user)
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
                if (!TicketCommentExists(id))
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

        // POST: api/TicketComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TicketComment>> PostTicketComment(TicketComment user)
        {
            _context.TicketComments.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketComment", new { id = user.Id }, user);
        }

        #endregion

        #region delete

        // DELETE: api/TicketComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicketComment(int id)
        {
            var user = await _context.TicketComments.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.TicketComments.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        #endregion

        private bool TicketCommentExists(int id)
        {
            return _context.TicketComments.Any(e => e.Id == id);
        }
    }
}
