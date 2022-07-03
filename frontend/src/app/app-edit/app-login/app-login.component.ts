import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppAccountService } from '../app-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-login'
  }
})
export class AppLoginComponent {
  @ViewChild('loginForm', { static: true }) loginForm: NgForm;
  userMail: string;
  password: string;
  constructor(private _service: AppAccountService) {
    this._resetValues();
   }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    return this._service.sendLogin().subscribe(_ => { });
   }

   resetForm() {
    this._resetValues();
    this.loginForm.form.markAsPristine();
   }

   private _resetValues(){
    this.userMail = "";
    this.password = "";
   }

}
