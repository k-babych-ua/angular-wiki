import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleFullComponent } from './components/article-full/article-full.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleNotFoundComponent } from './components/article-not-found/article-not-found.component';
import { HeaderComponent } from './components/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule }  from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ArticlesListHeaderComponent } from './components/articles-list-header/articles-list-header.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteArticleComponent } from './components/modals/delete-article/delete-article.component';
import { UpdateArticleComponent } from './components/modals/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesListComponent,
    ArticlePreviewComponent,
    ArticleFullComponent,
    ArticlesListHeaderComponent,
    ArticleEditComponent,
    ArticleNotFoundComponent,
    HeaderComponent,
    DeleteArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    DeleteArticleComponent,
    UpdateArticleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
