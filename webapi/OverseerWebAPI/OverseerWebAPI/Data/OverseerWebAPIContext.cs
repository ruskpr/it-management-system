using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OverseerWebAPI.Models;

namespace OverseerWebAPI.Data
{
    public class OverseerWebAPIContext : DbContext
    {
        public OverseerWebAPIContext (DbContextOptions<OverseerWebAPIContext> options)
            : base(options)
        {
        }

        public DbSet<OverseerWebAPI.Models.Organization> Organizations { get; set; } = default!;
        public DbSet<OverseerWebAPI.Models.User> Users { get; set; } = default!;
    }
}
