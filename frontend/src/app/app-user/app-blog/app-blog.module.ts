import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { AppBlogComponent } from './app-blog.component';
import { ShowdownModule } from 'ngx-showdown';


@NgModule({
  declarations: [
    AppBlogComponent
  ],
  exports: [AppBlogComponent],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    ShowdownModule
  ],
  providers: [ ]
})
export class AppBlogModule { }
