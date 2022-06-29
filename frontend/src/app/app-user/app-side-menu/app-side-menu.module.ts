import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { AppSideMenuRoutingModule } from './app-side-menu-routing.module';
import { AppSideMenuComponent } from './app-side-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppSideMenuComponent
  ],
  exports: [AppSideMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    AppSideMenuRoutingModule
  ]
})
export class AppSideMenuModule { }
