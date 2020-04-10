using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Models.Entities.Database
{
    public class Tag
    {
        public long Id { get; set; }

        public string Title { get; set; }

        public DateTime? CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }
    }

    public class TagDbConfig : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable("TagTable");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title).HasColumnType("nvarchar(256)").IsRequired();

            builder.Property(x => x.CreatedOn).HasColumnType("datetime2");
            builder.Property(x => x.ModifiedOn).HasColumnType("datetime2");
        }
    }
}
