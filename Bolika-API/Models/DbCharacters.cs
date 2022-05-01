using Microsoft.EntityFrameworkCore;
namespace Bolika_API;

	public class DbCharacters : DbContext
	{
		public DbSet<Characters> Characters { get; set; }
		public DbSet<Skills> Skills { get; set; }
		public DbSet<SkillLists> SkillLists { get; set; }
		public DbSet<Statistics> Statistics { get; set; }
		public DbCharacters (DbContextOptions<DbCharacters> options)
			: base(options)
		{
		}
	}	
