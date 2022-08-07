import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { IBlogEntry } from '../app-user.service';


@Injectable()
export class AppArticleService {
    apiBaseUrl = "/api/articles";
    constructor(private _http : HttpClient, private sanitizer: DomSanitizer) { }

    fetchSigleArticle(id: string): Observable<IBlogEntry> {
        return this._http.get<IBlogEntry>(`${this.apiBaseUrl}/article/${id}`);
    }

    fetchImage(imageName: string) {
        return this._http.get(`${this.apiBaseUrl}/image/${imageName}`, { responseType: 'blob' }).pipe(
            map(x => {
              const urlToBlob = window.URL.createObjectURL(x)
              return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); 
            }))
    }
    
}