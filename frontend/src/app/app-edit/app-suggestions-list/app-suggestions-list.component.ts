import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AppSuggestionsListService } from './app-suggestions-list.service';
import { map } from 'rxjs';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { ISuggestion } from 'src/app/app-user/app-suggestion/app-suggestion.service';

export interface ISuggestionEnhanced extends IBlogEntry, ISuggestion {}
@Component({
  selector: 'app-suggestions-list',
  templateUrl: './app-suggestions-list.component.html',
  styleUrls: ['./app-suggestions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-suggestions-list'
  }
})
export class AppSuggestionsListComponent {

  suggestionsList$ = this._service.fetchSuggestionsList().pipe(
    map(suggestions => suggestions.map(suggestion => ({...suggestion, title: suggestion.userName, Mail: suggestion.userMail}) as ISuggestionEnhanced)),
  );
  constructor(private _service: AppSuggestionsListService) {
  }

  goToSuggestion(suggestion: ISuggestionEnhanced){
    this._service.selectedSuggestion.next(suggestion);
  }
}
