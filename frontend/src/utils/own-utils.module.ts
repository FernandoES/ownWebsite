import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ShowdownModule } from 'ngx-showdown';
import { AppBlogRoutingModule } from 'src/app/app-user/app-blog/app-blog-routing.module';
import { LanguageModule } from 'src/language/language.module';
import { AppCardsPresentationComponent } from './app-cards-presentation/app-cards-presentation.component';


@NgModule({
    imports: [
        CommonModule,
        AppBlogRoutingModule,
        ShowdownModule,
        MatCardModule,
        FlexLayoutModule,
        LanguageModule,
    ],
    exports: [AppCardsPresentationComponent],
    declarations: [AppCardsPresentationComponent],
    providers: [],
})
export class OwnUtilsModule { }
