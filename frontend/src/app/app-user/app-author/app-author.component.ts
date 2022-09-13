import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-author',
    templateUrl: 'app-author.component.html',
    styleUrls: ['./app-author.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-author'
    }
})

export class AppAuthorComponent {
    constructor() { }
}