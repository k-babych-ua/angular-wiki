using AngularWiki.API.Models.Entities.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Services
{
    public class ArticleTagService
    {
        private readonly AngularWikiDbContext _dbContext;

        public ArticleTagService(AngularWikiDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
