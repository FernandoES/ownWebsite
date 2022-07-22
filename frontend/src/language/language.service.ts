import { Injectable } from '@angular/core';
import i18next, { i18n, InitOptions } from 'i18next';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import en from '../language/en.json';
import es from '../language/es.json';

@Injectable({providedIn: 'root'})
export class LanguageService {
    library: i18n;
    languageChanged = new BehaviorSubject<string>('en');

    i18nextInitOptions: InitOptions = {
        fallbackLng: ['en'],
        ns: ['single'],
        debug: !environment.production,
        resources: {}
    }
    constructor() { }

    init() {
        this.library = i18next;
        this.library.init(this.i18nextInitOptions);
        this.library.addResourceBundle("en", "single", en);
        this.library.addResourceBundle("es", "single", es);
    }

    changeLanguage(lang: string) {
        this.library.changeLanguage(lang);
        this.languageChanged.next(lang);
    }
    translate(text: string) {
        return this.library.t(text);
    }
}