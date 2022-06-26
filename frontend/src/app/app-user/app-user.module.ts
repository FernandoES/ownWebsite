import { NgModule } from '@angular/core';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppSideMenuModule } from './app-side-menu/app-side-menu.module';
import { AppUserRoutingModule } from './app-user-routing.module';

import { AppUserComponent } from './app-user.component';

@NgModule({
    imports: [AppHeaderModule, AppUserRoutingModule, AppSideMenuModule],
    declarations: [AppUserComponent],
    providers: [],
    bootstrap: [AppUserComponent]

})
export class AppUserModule { }
