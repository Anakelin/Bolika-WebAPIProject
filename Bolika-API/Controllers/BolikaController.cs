using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Bolika_API;

namespace Bolika_API.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class BolikaController : ControllerBase
    {
        private readonly DbCharacters _context;

        public BolikaController(DbCharacters context)
        {
            _context = context;
        }

        // GET: api/Bolika
        [HttpGet]
        public async Task<List<SkillLists>> GetSkillLists()
        {   
            List<SkillLists> items = await _context.SkillLists
            .Include(i => i.Character)
            .ThenInclude(i => i.Statistic)
            .Include(i => i.Skill)
            .ToListAsync();
            return items;
        }   

        // GET: api/Bolika/5
        [HttpGet("{chaId}")]
        public async Task<List<SkillLists>> GetCharacterSkills(int chaId)
        {
            List<SkillLists> items = await _context.SkillLists
            .Include(i => i.Character)
            .ThenInclude(i => i.Statistic)
            .Include(i => i.Skill)
            .Where(i => i.Character.CharId == chaId)
            .ToListAsync();
            return items;
        }
        /*
        [HttpGet("{chaId1}")]
        public async Task<List<Characters>> GetCharacterStats(int chaId1)
        {
            List<Characters> items = await _context.Characters
            .Include(i => i.Statistic)
            .Where(i => i.CharId == chaId1)
            .ToListAsync();
            return items;
        }
        */
        // PUT: api/Bolika/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkillLists(int id, SkillLists skillLists)
        {
            if (id != skillLists.SkillListId)
            {
                return BadRequest();
            }

            _context.Entry(skillLists).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillListsExists(id))
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

        // POST: api/Bolika
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SkillLists>> PostSkillLists(SkillLists skillLists)
        {
            _context.SkillLists.Add(skillLists);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSkillLists", new { id = skillLists.SkillListId }, skillLists);
        }

        // DELETE: api/Bolika/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkillLists(int id)
        {
            var skillLists = await _context.SkillLists.FindAsync(id);
            if (skillLists == null)
            {
                return NotFound();
            }

            _context.SkillLists.Remove(skillLists);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SkillListsExists(int id)
        {
            return _context.SkillLists.Any(e => e.SkillListId == id);
        }
    }
}
