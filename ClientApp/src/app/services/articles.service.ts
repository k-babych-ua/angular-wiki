import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IArticle } from '../models/entities/IArticle';
import { Article } from '../models/entities/Article';
import { IListResponse } from '../models/responses/IListResponse';
import { ISingleResponse } from '../models/responses/ISingleResponse';
import { IResponse } from '../models/responses/IResponse';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesUrl;

  constructor(
    private http: HttpClient
  ) {
    this.articlesUrl = `${environment.apiUrl}/api/v1/Article`;
  }

  public getArticle(id: number): Observable<ISingleResponse<IArticle>> {
    return this.http.get<ISingleResponse<IArticle>>(`${this.articlesUrl}/${id}`);
  }

  public getArticles(amount?: number): Observable<IListResponse<IArticle>> {
    if (amount < 1 || !amount)
      amount = 100;

    return this.http.get<IListResponse<IArticle>>(`${this.articlesUrl}/Articles`);
  }

  public createArticle(article: IArticle): Observable<ISingleResponse<IArticle>> {
    if (article && (!article.title || !article.firstParagraph)) {
      console.error("Article must have title and first paragraph");
      return null;
    }

    return this.http.post<ISingleResponse<IArticle>>(`${this.articlesUrl}`, article);
  }

  public updateArticle(article: IArticle): Observable<ISingleResponse<IArticle>> {
    if (article && !article.id) {
      console.error("Article must have id");
      return null;
    }

    return this.http.patch<ISingleResponse<IArticle>>(`${this.articlesUrl}/${article.id}`, article);
  }

  public deleteArticle(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(`${this.articlesUrl}/${id}`);
  }

  public getArticleCopy(article: IArticle): IArticle {
    return {
      id: article.id,
      body: article.body,
      firstParagraph: article.firstParagraph,
      imageUrl: article.imageUrl,
      title: article.title,
      tags: article.tags
    } as Article;
  }
}
