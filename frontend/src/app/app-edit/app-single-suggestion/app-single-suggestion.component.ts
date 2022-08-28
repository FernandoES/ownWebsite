import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { AppSuggestionsListService } from '../app-suggestions-list/app-suggestions-list.service';

@Component({
    selector: 'app-single-suggestion',
    templateUrl: 'app-single-suggestion.component.html'
})

export class AppSingleSuggestion implements OnInit {
    error$ = new Subject<string>();
    public singleSuggestion$: Observable<IBlogEntry>;
    constructor(public service: AppSuggestionsListService) { }

    ngOnInit() {
        this.singleSuggestion$ = this.service.selectedSuggestion.asObservable();
    }
}