using AngularWiki.API.Models.Entities.Database;
using AngularWiki.API.Models.Responses;
using Microsoft.AspNetCore.Components.Server;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Repositories
{
    public class ArticleTagRepository
    {
        private readonly AngularWikiDbContext _dbContext;

        public ArticleTagRepository(AngularWikiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IListResponse<long>> DeleteByArticleId(long articleId)
        {
            ListResponse<long> response = new ListResponse<long>()
            {
                IsSuccess = false
            };
            
            try
            {
                var connections = _dbContext.ArticleTagConnections.Where(at => at.ArticleId == articleId);

                if (connections.Any())
                {
                    _dbContext.ArticleTagConnections.AttachRange(connections);
                    _dbContext.ArticleTagConnections.RemoveRange(connections);

                    await _dbContext.SaveChangesAsync();

                    response.Items = connections.Select(at => at.Id);
                    response.IsSuccess = true;
                }
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }
    }
}
