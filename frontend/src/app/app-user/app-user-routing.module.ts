import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserComponent } from './app-user.component';

export const appUserRoutes: Routes = [
    {
        path: '',
        component: AppUserComponent,
        children: [
            {
                path: '',
                redirectTo: 'blog',
                pathMatch: 'full',
            },
            {
                path: 'blog',
                loadChildren: () => import('./app-blog/app-blog.module').then(m => m.AppBlogModule)
            },
            {
                path: 'suggestions', 
                loadChildren: () => import('./app-suggestions/app-suggestions.module').then(m => m.AppSuggestionsModule)
            },
            {
                path: 'article/:id',
                loadChildren: () => import('./app-article/app-article.module').then(m => m.AppArticleModule)
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