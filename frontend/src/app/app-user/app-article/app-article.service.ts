import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogEntry } from '../app-user.service';


@Injectable()
export class AppArticleService {
    apiBaseUrl = "/api/articles/article";
    constructor(private _http : HttpClient) { }

    fetchSigleArticle(id: string): Observable<IBlogEntry> {
        return this._http.get<IBlogEntry>(`${this.apiBaseUrl}/${id}`);
    }
    
}