import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/utils/notification.service';
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
  constructor(private _service: AppAccountService, private _notification: NotificationService) { 
    this._resetValues();
  }

  createAccount(){
    if(this.createForm.invalid) {
      return;
    }
    this._service.createAccount(this.userMail, this.password).subscribe({next: _ => {
      this._notification.success("account.created");
      this.resetForm(true);
    }});
  }

  resetForm(avoidInform: boolean = false){
    this._resetValues();
    this.createForm.form.markAsPristine();
    if(!avoidInform) { 
      this._notification.success("common.reset");
    }
  }

  private _resetValues() {
    this.userMail = "";
    this.password = "";
  }
}
