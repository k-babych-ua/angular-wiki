import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticleFullComponent } from './components/article-full/article-full.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: MainPageComponent
  },
  {
    path: "article/:id", pathMatch: "full", component: ArticleFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
