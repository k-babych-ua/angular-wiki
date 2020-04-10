using AngularWiki.API.Models.Entities.Database;
using AngularWiki.API.Models.Responses;
using AngularWiki.API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWiki.API.Services
{
    public class ArticleService
    {
        private readonly AngularWikiDbContext _dbContext;

        private readonly ArticleRepository _articleRepository;
        private readonly ArticleTagRepository _articleTagRepository;

        public ArticleService(AngularWikiDbContext dbContext)
        {
            _dbContext = dbContext;

            _articleRepository = new ArticleRepository(dbContext);
            _articleTagRepository = new ArticleTagRepository(dbContext);
        }

        public async Task<ISingleResponse<Article>> CreateArticle(Article article)
        {
            ISingleResponse<Article> response = new SingleResponse<Article>()
            {
                IsSuccess = false
            };

            try
            {
                if (string.IsNullOrWhiteSpace(article.Title) || string.IsNullOrWhiteSpace(article.FirstParagraph))
                {
                    response.Message = "An article must has title and first paragraph filled in";
                    return response;
                }

                article.Id = null;
                response = await _articleRepository.CreateArticle(article);
            }
            catch (Exception e)
            {
                response.IsSuccess = false;
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<ISingleResponse<Article>> PatchArticle(Article article)
        {
            ISingleResponse<Article> response = new SingleResponse<Article>()
            {
                IsSuccess = false
            };

            try
            {
                Article itemToUpdate = _dbContext.Articles.FirstOrDefault(a => a.Id == article.Id);

                if (itemToUpdate != null)
                {
                    if (!string.IsNullOrWhiteSpace(article.Title))
                        itemToUpdate.Title = article.Title;

                    if (!string.IsNullOrWhiteSpace(article.FirstParagraph))
                        itemToUpdate.FirstParagraph = article.FirstParagraph;

                    if (!string.IsNullOrWhiteSpace(article.Body))
                        itemToUpdate.Body = article.Body;

                    if (!string.IsNullOrWhiteSpace(article.ImageUrl))
                        itemToUpdate.ImageUrl = article.ImageUrl;

                    response = await _articleRepository.UpdateArticle(itemToUpdate);
                }
                else
                {
                    response.Message = $"Article with id {article.Id} not found";
                }
            }
            catch (Exception e)
            {
                response.IsSuccess = false;
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<IResponse> DeleteArticle(long id)
        {
            IResponse response = new Response()
            {
                IsSuccess = false
            };

            using (var dbTransaction = await _dbContext.Database.BeginTransactionAsync())
            {
                try
                {
                    var deleteArticelTagResponse = await _articleTagRepository.DeleteByArticleId(id);

                    if (deleteArticelTagResponse.IsSuccess)
                    {
                        response = await _articleRepository.DeleteArticle(id);

                        if (response.IsSuccess)
                            await dbTransaction.CommitAsync();
                        else
                            await dbTransaction.RollbackAsync();
                    }
                    else
                    {
                        await dbTransaction.RollbackAsync();
                        return deleteArticelTagResponse;
                    }
                }
                catch (Exception e)
                {
                    await dbTransaction.RollbackAsync();

                    response.IsSuccess = false;
                    response.Message = e.Message;
                }
            }

            return response;
        }
    }
}
