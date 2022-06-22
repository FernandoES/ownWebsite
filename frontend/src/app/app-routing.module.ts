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
      loadChildren: () => {console.log("loading app user module"); return import('./app-user/app-user.module').then(m => m.AppUserModule);}
    },
    //{path: 'edit', component:}}
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
