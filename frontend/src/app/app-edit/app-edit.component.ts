import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AppAccountService } from './app-account.service';

enum LoginOption {
  LOGIN,
  RESTORE,
  CREATE
}
@Component({
  selector: 'app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-edit'
  }
})
export class AppEditComponent {
  selectedLoginOption: LoginOption = LoginOption.LOGIN;
  LoginOption = LoginOption;
  userMail: string;
  userPassword: string;
  constructor(public service: AppAccountService) { }
  goToRestorePasswordMenu() {
    this.selectedLoginOption = LoginOption.RESTORE;
  }

  goTocreateAccountMenu() {
    this.selectedLoginOption = LoginOption.CREATE;
  }

  goToLoginMenu() {
    this.selectedLoginOption = LoginOption.LOGIN;
  }

}
