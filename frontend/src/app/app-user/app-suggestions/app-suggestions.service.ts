import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface ISuggestion {
    userName: string;
    email: string;
    suggestion: string;
}
@Injectable()
export class AppSuggestionsService {
    constructor() { }

    sendSuggestions(suggestion: ISuggestion) {
        return of({suggestion});
    }
    
}