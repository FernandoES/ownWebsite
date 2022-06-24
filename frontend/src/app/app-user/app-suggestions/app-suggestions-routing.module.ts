import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSuggestionsComponent } from './app-suggestions.component';

const routes: Routes = [{
  path: '',
  component: AppSuggestionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSuggestionsRoutingModule { }
