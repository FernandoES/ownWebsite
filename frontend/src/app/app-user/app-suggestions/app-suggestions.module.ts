import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSuggestionsRoutingModule } from './app-suggestions-routing.module';
import { AppSuggestionsComponent } from './app-suggestions.component';
import { FormsModule } from '@angular/forms';
import { AppSuggestionsService } from './app-suggestions.service';
import {MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { I18NextModule } from 'angular-i18next';


@NgModule({
  declarations: [
    AppSuggestionsComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule,
    AppSuggestionsRoutingModule,
    MatInputModule,
    FlexLayoutModule,    
    MatButtonModule, 
    I18NextModule
  ],
  providers: [AppSuggestionsService]
})
export class AppSuggestionsModule { }
