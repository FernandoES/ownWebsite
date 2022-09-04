import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ISuggestion {
    authorName: string,
    authorMail: string,
    body: string,
    _id?: string;
    date?: string;
}

@Injectable()
export class AppSuggestionsService {
    apiBaseroute = "/api/suggestions";
    constructor(private _http : HttpClient) { }

    sendSuggestions(suggestion: ISuggestion) {
        return this._http.post(`${this.apiBaseroute}/suggestion`, suggestion);
    }
    
}