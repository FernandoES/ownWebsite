import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserComponent } from './app-user.component';

export const appUserRoutes: Routes = [
    {
        path: '',
        component: AppUserComponent,
        children: [
            {
                path: 'blog',
                loadChildren: () => import('./app-blog/app-blog.module').then(m => {console.log("Loding blog module");return m.AppBlogModule;})
            },
            {
                path: 'suggestions', 
                loadChildren: () => import('./app-suggestions/app-suggestions.module').then(m => {console.log("loading suggestions module");return m.AppSuggestionsModule;})
            },
            {
                path: 'article/:id',
                loadChildren: () => import('./app-article/app-article.module').then(m => {console.log("loading article module"); return m.AppArticleModule;})
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(appUserRoutes)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppUserRoutingModule {}