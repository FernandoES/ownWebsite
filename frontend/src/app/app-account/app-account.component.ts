import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AppAccountService } from './app-account.service';

enum LoginOption {
    LOGIN,
    RESTORE,
    CREATE
  }
@Component({
    selector: 'app-account',
    templateUrl: 'app-account.component.html',
    styleUrls: ['app-account.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      class: 'app-account'
    }

})

export class AppAccountComponent {
    selectedLoginOption: LoginOption = LoginOption.LOGIN;
    LoginOption = LoginOption;
    constructor(public service: AppAccountService, private _ref: ChangeDetectorRef) { }
    goToRestorePasswordMenu() {
      this.selectedLoginOption = LoginOption.RESTORE;
    }
  
    goTocreateAccountMenu() {
      this.selectedLoginOption = LoginOption.CREATE;
    }
  
    goToLoginMenu() {
      this.selectedLoginOption = LoginOption.LOGIN;
    }

    update() {
      this._ref.markForCheck()
    }
}