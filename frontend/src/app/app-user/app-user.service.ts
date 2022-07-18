import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IBlogEntry {
    title: string;
    body: string;
    _id?: string;
    date?: Date;
    author?: string;
}

@Injectable()
export class UserService {
    constructor(private _http : HttpClient) { }
    apiBaseUrl = '/api/articles';
    fetchArticlesList(): Observable<IBlogEntry[]> {
        return this._http.get<IBlogEntry[]>(`${this.apiBaseUrl}/articlesList`);
    }
}