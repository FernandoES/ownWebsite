import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppArticleRoutingModule } from './app-article-routing.module';
import { AppArticleComponent } from './app-article.component';
import { AppArticleService } from './app-article.service';


@NgModule({
  declarations: [
    AppArticleComponent
  ],
  imports: [
    CommonModule,
    AppArticleRoutingModule
  ],
  providers: [
    AppArticleService
  ]
})
export class AppArticleModule { }
