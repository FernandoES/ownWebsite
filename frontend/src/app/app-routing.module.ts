import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'user',
      pathMatch: 'full',
    },
    {
      path: 'user', 
      loadChildren: () => import('./app-user/app-user.module').then(m => {console.log("loading user module");return m.AppUserModule;})
    },
    {
      path: 'edit', 
      loadChildren: () => import('./app-edit/app-edit.module').then(m => {console.log("loading edit module");return m.AppEditModule;})
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'corrected'
})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
