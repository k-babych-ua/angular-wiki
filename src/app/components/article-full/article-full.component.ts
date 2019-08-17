import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/models/entities/IArticle';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.css']
})
export class ArticleFullComponent implements OnInit {
  public article: IArticle;

  constructor(
    private _articlesService: ArticlesService,
    private _route: ActivatedRoute
  ) {
    const id = _route.snapshot.params.id;
    this.article = this._articlesService.getArticle(id);
  }

  ngOnInit() {
  }
}
