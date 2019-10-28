import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/models/entities/IArticle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: IArticle;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public openArticle() {
    this._router.navigate([`/article/${this.article.id}`]);
  }
}
