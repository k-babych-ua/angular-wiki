import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list-header',
  templateUrl: './articles-list-header.component.html',
  styleUrls: ['./articles-list-header.component.css']
})
export class ArticlesListHeaderComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public createArticle(): void {
    this._router.navigate(['/articles/new']);
  }

}
