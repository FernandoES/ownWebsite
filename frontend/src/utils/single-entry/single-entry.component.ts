import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBlogEntry } from 'src/app/app-user/app-user.service';

@Component({
    selector: 'single-entry',
    templateUrl: 'single-entry.component.html',
    styleUrls: ['single-entry.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: "single-entry"
    }
})
export class SingleEntryComponent {
    @Input() entry$: Observable<IBlogEntry>;
    @Input() error$: Subject<string>;
    constructor() {}
}