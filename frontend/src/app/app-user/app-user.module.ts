import { NgModule } from '@angular/core';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppUserRoutingModule } from './app-user-routing.module';

import { AppUserComponent } from './app-user.component';

@NgModule({
    imports: [AppHeaderModule, AppUserRoutingModule],
    exports: [AppUserComponent, ],
    declarations: [AppUserComponent],
    providers: [],
    bootstrap: [AppUserComponent]

})
export class AppUserModule { }
