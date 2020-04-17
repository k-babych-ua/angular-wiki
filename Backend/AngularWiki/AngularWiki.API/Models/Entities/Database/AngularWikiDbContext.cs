using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Models.Entities.Database
{
    public class AngularWikiDbContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<ArticleTag> ArticleTagConnections { get; set; }

        public AngularWikiDbContext(DbContextOptions<AngularWikiDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            try
            {
                modelBuilder.ApplyConfiguration(new ArticleDbConfig());
                modelBuilder.ApplyConfiguration(new TagDbConfig());
                modelBuilder.ApplyConfiguration(new ArticleTagDbConfig());

                base.OnModelCreating(modelBuilder);
            }
            catch (Exception e)
            {
                System.Diagnostics.Trace.TraceError($"Error during model creating ({this.GetType()}): {e.Message}");
                throw e;
            }
        }
    }
}
