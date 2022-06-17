import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppHeaderComponent } from './app-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule
    ],
    exports: [AppHeaderComponent],
    declarations: [AppHeaderComponent],
    providers: [],
})
export class AppHeaderModule { }
