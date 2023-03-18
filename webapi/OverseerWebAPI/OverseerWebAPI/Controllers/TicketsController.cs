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
    public class TicketsController : ControllerBase
    {
        private readonly OverseerWebAPIContext _context;

        public TicketsController(OverseerWebAPIContext context)
        {
            _context = context;
        }

        #region get

        // GET: api/Tickets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicket()
        {
            return await _context.Tickets.OrderByDescending(x => x.DateAdded).ToListAsync();
        }

        // GET: api/Tickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            var user = await _context.Tickets.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        #endregion

        #region put

        // PUT: api/Tickets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicket(int id, Ticket user)
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
                if (!TicketExists(id))
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

        // POST: api/Tickets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ticket>> PostTicket(Ticket user)
        {
            _context.Tickets.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicket", new { id = user.Id }, user);
        }

        #endregion

        #region delete

        // DELETE: api/Tickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicket(int id)
        {
            var user = await _context.Tickets.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Tickets.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        #endregion

        private bool TicketExists(int id)
        {
            return _context.Tickets.Any(e => e.Id == id);
        }
    }
}
