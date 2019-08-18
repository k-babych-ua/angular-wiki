import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from 'src/app/models/entities/IArticle';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.css']
})
export class ArticleFullComponent implements OnInit {
  public article: IArticle;
  public isEditMode: boolean;

  private _articleBackup: IArticle;

  constructor(
    private _articlesService: ArticlesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    const id = this._route.snapshot.params.id;
    this.article = this._articlesService.getArticle(id);
    this._articleBackup = this._articlesService.getArticleCopy(this.article);

    this.isEditMode = false;
  }

  ngOnInit() {
  }

  public editArticle(): void {
    this.isEditMode = true;
  }

  public deleteArticle(): void {
    this._articlesService.deleteArticle(this.article.id);
    this.isEditMode = false;

    this._router.navigate([""]);
  }

  public saveArticle(): void {
    this._articlesService.updateArticle(this.article);
    this._articleBackup = this._articlesService.getArticleCopy(this.article);

    this.isEditMode = false;
  }

  public undoArticle(): void {
    this.isEditMode = false;
    this.article = this._articlesService.getArticleCopy(this._articleBackup);
  }
}
