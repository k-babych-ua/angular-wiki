import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/entities/IArticle';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public articles: IArticle[];

  constructor(
    private _articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this._articlesService.getArticles()
      .subscribe(response => this.articles = response.items);
  }

}
