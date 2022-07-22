import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
    imports: [FlexLayoutModule,CommonModule,RouterModule, I18NextModule  ],
    exports: [AppHeaderComponent],
    declarations: [AppHeaderComponent],
    providers: [],
})
export class AppHeaderModule { }
