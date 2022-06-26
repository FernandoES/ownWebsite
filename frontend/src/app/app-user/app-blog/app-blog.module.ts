import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { AppBlogComponent } from './app-blog.component';
import { AppBlogService } from './app-blog.service';


@NgModule({
  declarations: [
    AppBlogComponent
  ],
  exports: [AppBlogComponent],
  imports: [
    CommonModule,
    AppBlogRoutingModule
  ],
  providers: [
    AppBlogService
  ]
})
export class AppBlogModule { }
