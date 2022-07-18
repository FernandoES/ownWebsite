import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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
  @Output() onLogin = new EventEmitter<boolean>();
  userMail: string;
  password: string;
  constructor(private _service: AppAccountService) {
    this._resetValues();
   }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    return this._service.sendLogin(this.userMail, this.password).subscribe({
      next: () => this.onLogin.emit(true),
      error: response => console.log(response.error.message)
    });
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
