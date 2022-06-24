import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppEditRoutingModule } from './app-edit-routing.module';
import { AppEditComponent } from './app-edit.component';


@NgModule({
  declarations: [
    AppEditComponent
  ],
  imports: [
    CommonModule,
    AppEditRoutingModule
  ]
})
export class AppEditModule { }
