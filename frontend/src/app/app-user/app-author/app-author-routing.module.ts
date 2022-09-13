import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthorComponent } from './app-author.component';

export const routes: Routes = [{
    path: '',
    component: AppAuthorComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppAuthorRoutingModule {}