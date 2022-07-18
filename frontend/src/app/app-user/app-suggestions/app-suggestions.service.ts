import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ISuggestion {
    userName: string,
    userMail: string,
    body: string,
}
@Injectable()
export class AppSuggestionsService {
    apiBaseroute = "/api/suggestions";
    constructor(private _http : HttpClient) { }

    sendSuggestions(suggestion: ISuggestion) {
        return this._http.post(`${this.apiBaseroute}/suggestion`, suggestion);
    }
    
}