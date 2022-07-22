import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/utils/notification.service';
import { AppSuggestionsService, ISuggestion } from './app-suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './app-suggestions.component.html',
  styleUrls: ['./app-suggestions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-suggestions'
  } 
})
export class AppSuggestionsComponent{
  @ViewChild('suggestionForm', { static: true }) suggestionForm: NgForm;
  suggestion: ISuggestion;
  constructor(private _service: AppSuggestionsService, private _notification: NotificationService) {
    this._resetSuggestion();
   }

  sendSuggestion(){
    if(this.suggestionForm.invalid){
      return;
    }
    const suggestion = this.suggestionForm.value;
    this._service.sendSuggestions(suggestion).subscribe({next: _ => {
    this._notification.success("suggestions.sent");
      this.resetForm(true);
    }});
  }

  resetForm(avoidInform?: boolean){
    this._resetSuggestion();
    this.suggestionForm.form.markAsPristine();
    if(!avoidInform) { 
      this._notification.success("common.reset");
    }
  }

  private _resetSuggestion() {
    this.suggestion = {
      userName: "",
      userMail: "",
      body: "",
    }
  }
}
