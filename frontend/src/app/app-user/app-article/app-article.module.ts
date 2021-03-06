import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppArticleRoutingModule } from './app-article-routing.module';
import { AppArticleComponent } from './app-article.component';
import { AppArticleService } from './app-article.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowdownModule } from 'ngx-showdown';
import { I18NextModule } from 'angular-i18next';


@NgModule({
  declarations: [
    AppArticleComponent
  ],
  imports: [
    CommonModule,
    AppArticleRoutingModule,
    FlexLayoutModule,
    ShowdownModule, 
    I18NextModule
  ],
  providers: [
    AppArticleService
  ]
})
export class AppArticleModule { }
