import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { AppSideMenuRoutingModule } from './app-side-menu-routing.module';
import { AppSideMenuComponent } from './app-side-menu.component';


@NgModule({
  declarations: [
    AppSideMenuComponent
  ],
  exports: [AppSideMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppSideMenuRoutingModule
  ]
})
export class AppSideMenuModule { }
