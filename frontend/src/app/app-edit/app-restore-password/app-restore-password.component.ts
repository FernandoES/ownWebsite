import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppAccountService } from '../app-account.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './app-restore-password.component.html',
  styleUrls: ['./app-restore-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-restore-password'
  }
})
export class AppRestorePasswordComponent {
  @ViewChild('restoreForm', { static: true }) restoreForm: NgForm;
  userMail: string;
  oldPassword: string;
  newPassword: string;
  constructor(private _service: AppAccountService) {
    this._resetValues();
  }

  submitRestore(){
    if(this.restoreForm.invalid) {
      return;
    }
    this._service.restorePassword().subscribe(_ => {
      this.resetForm();
    });
  }

  resetForm(){
    this._resetValues();
    this.restoreForm.form.markAsPristine();
  }

  private _resetValues() {
    this.userMail = "";
    this.oldPassword = "";
    this.newPassword = "";
  }
}
