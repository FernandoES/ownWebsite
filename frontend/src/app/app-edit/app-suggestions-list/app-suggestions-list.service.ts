import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISuggestion } from 'src/app/app-user/app-suggestion/app-suggestion.service';
import { IBlogEntry } from 'src/app/app-user/app-user.service';

@Injectable()
export class AppSuggestionsListService {
    apiBaseUrl = '/api/suggestions';
    public selectedSuggestion = new Subject<IBlogEntry>();
    constructor(private _http: HttpClient) { }
    fetchSuggestionsList(): Observable<ISuggestion[]> {
      return this._http.get<ISuggestion[]>(`${this.apiBaseUrl}/suggestionsList`);
    }

    selectSuggestion(suggestion: IBlogEntry){
      this.selectedSuggestion.next(suggestion);
    }
}