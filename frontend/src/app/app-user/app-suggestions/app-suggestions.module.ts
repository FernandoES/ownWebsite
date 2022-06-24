import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSuggestionsRoutingModule } from './app-suggestions-routing.module';
import { AppSuggestionsComponent } from './app-suggestions.component';


@NgModule({
  declarations: [
    AppSuggestionsComponent
  ],
  imports: [
    CommonModule,
    AppSuggestionsRoutingModule
  ]
})
export class AppSuggestionsModule { }
