import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISuggestion } from 'src/app/app-user/app-suggestion/app-suggestion.service';
import { ISuggestionEnhanced } from './app-suggestions-list.component';

@Injectable()
export class AppSuggestionsListService {
    apiBaseUrl = '/api/suggestions';
    public selectedSuggestion = new Subject<ISuggestionEnhanced | null>();
    constructor(private _http: HttpClient) { }
    fetchSuggestionsList(): Observable<ISuggestion[]> {
      return this._http.get<ISuggestion[]>(`${this.apiBaseUrl}/suggestionsList`);
    }

    selectSuggestion(suggestion: ISuggestionEnhanced | null){
      this.selectedSuggestion.next(suggestion);
    }

    deleteSuggestion(suggestionId: string) {
      return this._http.delete(`${this.apiBaseUrl}/suggestion/${suggestionId}`);
    }
}