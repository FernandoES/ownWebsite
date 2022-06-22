import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
    imports: [FlexLayoutModule,CommonModule ],
    exports: [AppHeaderComponent],
    declarations: [AppHeaderComponent],
    providers: [],
})
export class AppHeaderModule { }
