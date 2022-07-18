import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppArticleRoutingModule } from './app-article-routing.module';
import { AppArticleComponent } from './app-article.component';
import { AppArticleService } from './app-article.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowdownModule } from 'ngx-showdown';


@NgModule({
  declarations: [
    AppArticleComponent
  ],
  imports: [
    CommonModule,
    AppArticleRoutingModule,
    FlexLayoutModule,
    ShowdownModule
  ],
  providers: [
    AppArticleService
  ]
})
export class AppArticleModule { }
