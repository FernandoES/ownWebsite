import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppAccountService } from '../app-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './app-create-account.component.html',
  styleUrls: ['./app-create-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-create-account'
  }
})
export class AppCreateAccountComponent {
  @ViewChild('createForm', { static: true }) createForm: NgForm;
  userMail: string;
  password: string;
  constructor(private _service: AppAccountService) { 
    this._resetValues();
  }

  createAccount(){
    if(this.createForm.invalid) {
      return;
    }
    this._service.createAccount().subscribe(_ => {
      this.resetForm();
    });
  }

  resetForm(){
    this._resetValues();
    this.createForm.form.markAsPristine();
  }

  private _resetValues() {
    this.userMail = "";
    this.password = "";
  }
}
