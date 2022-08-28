import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { AppEditRoutingModule } from './app-edit-routing.module';
import { AppEditComponent } from './app-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppLoginComponent } from './app-login/app-login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AppRestorePasswordComponent } from './app-restore-password/app-restore-password.component';
import { AppCreateAccountComponent } from './app-create-account/app-create-account.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppCreateBlogComponent } from './app-create-blog/app-create-blog.component';
import { MatInputModule } from '@angular/material/input';
import { AppCreateBlogService } from './app-create-blog/app-create-blog.service';
import { LanguageModule } from 'src/language/language.module';
import { AppEditorAreaComponent } from './app-editor-area/app-editor-area.component';
import { AppSuggestionsListComponent } from './app-suggestions-list/app-suggestions-list.component';
import { AppSuggestionsListService } from './app-suggestions-list/app-suggestions-list.service';
import { OwnUtilsModule } from 'src/utils/own-utils.module';
import { ShowdownModule } from 'ngx-showdown';
import { AppSingleSuggestion } from './app-single-suggestion/app-single-suggestion.component';


@NgModule({
  declarations: [
    AppEditComponent,
    AppLoginComponent,
    AppRestorePasswordComponent,
    AppCreateAccountComponent,
    AppCreateBlogComponent,
    AppEditorAreaComponent,
    AppSuggestionsListComponent,
    AppSingleSuggestion
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppEditRoutingModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    LanguageModule,
    OwnUtilsModule,
    ShowdownModule,
  ],
  providers: [
    AppCreateBlogService,
    AppSuggestionsListService
  ]
})
export class AppEditModule { }
