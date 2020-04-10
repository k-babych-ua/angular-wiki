using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Models.Entities.Database
{
    public class Article
    {
        public long? Id { get; set; }

        public string Title { get; set; }

        public string FirstParagraph { get; set; }

        public string Body { get; set; }

        public string ImageUrl { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }
    }

    public class ArticleDbConfig : IEntityTypeConfiguration<Article>
    {
        public void Configure(EntityTypeBuilder<Article> builder)
        {
            builder.ToTable("ArticleTable");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title).HasColumnType("nvarchar(256)").IsRequired();
            builder.Property(x => x.FirstParagraph).HasColumnType("nvarchar(256)").IsRequired();
            builder.Property(x => x.Body).HasColumnType("nvarchar(max)");
            builder.Property(x => x.ImageUrl).HasColumnType("nvarchar(255)");

            builder.Property(x => x.CreatedOn).HasColumnType("datetime2");
            builder.Property(x => x.ModifiedOn).HasColumnType("datetime2");
        }
    }
}
