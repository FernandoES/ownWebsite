import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { AppBlogComponent } from './app-blog.component';
import { ShowdownModule } from 'ngx-showdown';
import { LanguageModule } from 'src/language/language.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnUtilsModule } from 'src/utils/own-utils.module';


@NgModule({
  declarations: [
    AppBlogComponent
  ],
  exports: [AppBlogComponent],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    ShowdownModule,
    MatCardModule,
    FlexLayoutModule,
    LanguageModule
  ],
  providers: [ ]
})
export class AppBlogModule { }
