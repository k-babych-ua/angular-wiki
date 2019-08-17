import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleFullComponent } from './components/article-full/article-full.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesListComponent,
    ArticlePreviewComponent,
    ArticleFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
