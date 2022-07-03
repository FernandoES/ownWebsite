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
import { AppAccountService } from './app-account.service';


@NgModule({
  declarations: [
    AppEditComponent,
    AppLoginComponent,
    AppRestorePasswordComponent,
    AppCreateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppEditRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  providers: [
    AppAccountService
  ]
})
export class AppEditModule { }
