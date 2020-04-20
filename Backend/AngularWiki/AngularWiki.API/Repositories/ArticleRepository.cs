using AngularWiki.API.Models.Entities.Database;
using AngularWiki.API.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Repositories
{
    public class ArticleRepository
    {
        private readonly AngularWikiDbContext _dbContext;

        public ArticleRepository(AngularWikiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ISingleResponse<Article>> CreateArticle(Article article)
        {
            SingleResponse<Article> response = new SingleResponse<Article>()
            {
                IsSuccess = false
            };

            try
            {
                _dbContext.Articles.Add(article);
                await _dbContext.SaveChangesAsync();

                response.IsSuccess = true;
                response.Item = article;
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<ISingleResponse<Article>> UpdateArticle(Article article)
        {
            SingleResponse<Article> response = new SingleResponse<Article>()
            {
                IsSuccess = false
            };

            try
            {
                _dbContext.Articles.Update(article);
                await _dbContext.SaveChangesAsync();

                response.IsSuccess = true;
                response.Item = article;
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<IResponse> DeleteArticle(long id)
        {
            Response response = new Response()
            {
                IsSuccess = false
            };
            
            try
            {
                Article itemToDelete = _dbContext.Articles.FirstOrDefault(a => a.Id == id);

                if (itemToDelete != null)
                {
                    _dbContext.Articles.Attach(itemToDelete);
                    _dbContext.Articles.Remove(itemToDelete);
                    await _dbContext.SaveChangesAsync();

                    response.IsSuccess = true;
                }
                else
                {
                    response.Message = $"Article with id {id} not found";
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
