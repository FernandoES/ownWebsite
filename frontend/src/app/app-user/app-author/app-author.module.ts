import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LanguageModule } from 'src/language/language.module';
import { AppAuthorRoutingModule } from './app-author-routing.module';

import { AppAuthorComponent } from './app-author.component';

@NgModule({
    imports: [
        LanguageModule, 
        CommonModule,
        FlexLayoutModule,
        AppAuthorRoutingModule
     ],
    exports: [],
    declarations: [AppAuthorComponent],
    providers: [],
})
export class AppAuthorModule { }
