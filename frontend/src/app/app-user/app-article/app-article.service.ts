import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IArticle {
    title: string;
    body: string;
}

@Injectable()
export class AppArticleService {
    constructor() { }

    fetchSigleArticle(id: string): Observable<IArticle> {
        return of({title: "Test Blog Article Title", body: "Blog Article Body. \n long, long. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAA"});
    }
    
}