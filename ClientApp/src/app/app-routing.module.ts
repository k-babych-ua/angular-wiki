import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticleFullComponent } from './components/article-full/article-full.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleNotFoundComponent } from './components/article-not-found/article-not-found.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: MainPageComponent
  },
  {
    path: "article/:id", pathMatch: "full", component: ArticleFullComponent
  },
  {
    path: "article/:id/edit", pathMatch: "full", component: ArticleEditComponent
  },
  {
    path: "articles/new", pathMatch: "full", component: ArticleEditComponent
  },
  {
    path: "**", component: ArticleNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
