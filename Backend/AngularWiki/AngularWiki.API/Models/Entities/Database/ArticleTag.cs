using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Models.Entities.Database
{
    public class ArticleTag
    {
        public long Id { get; set; }

        public long ArticleId { get; set; }

        public long TagId { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }
    }

    public class ArticleTagDbConfig : IEntityTypeConfiguration<ArticleTag>
    {
        public void Configure(EntityTypeBuilder<ArticleTag> builder)
        {
            builder.ToTable("ArticleTagTable");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.ArticleId).HasColumnType("bigint");
            builder.Property(x => x.TagId).HasColumnType("bigint");

            builder.Property(x => x.CreatedOn).HasColumnType("datetime2");
            builder.Property(x => x.ModifiedOn).HasColumnType("datetime2");
        }
    }
}
