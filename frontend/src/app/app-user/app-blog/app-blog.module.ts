import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { AppBlogComponent } from './app-blog.component';
import { ShowdownModule } from 'ngx-showdown';
import { I18NextModule } from 'angular-i18next';


@NgModule({
  declarations: [
    AppBlogComponent
  ],
  exports: [AppBlogComponent],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    ShowdownModule,
    I18NextModule
  ],
  providers: [ ]
})
export class AppBlogModule { }
