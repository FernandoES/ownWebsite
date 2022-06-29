import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatMenuModule } from '@angular/material/menu';
import { AppSideMenuRoutingModule } from './app-side-menu-routing.module';
import { AppSideMenuComponent } from './app-side-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppSideMenuService } from './app-side-menu.service';

@NgModule({
  declarations: [
    AppSideMenuComponent
  ],
  exports: [AppSideMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatIconModule,
    AppSideMenuRoutingModule,
    FormsModule
  ],
  providers: [
    AppSideMenuService
  ]
})
export class AppSideMenuModule { }
