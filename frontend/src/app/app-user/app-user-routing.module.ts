import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserComponent } from './app-user.component';

export const appUserRoutes: Routes = [
    {
        path: '',
        component: AppUserComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(appUserRoutes)],
    providers: [],
    exports: [RouterModule],
  })
  export class AppUserRoutingModule {}