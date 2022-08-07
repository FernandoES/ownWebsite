import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { AppAccountService } from '../app-account.service';

@Injectable()
export class AppCreateBlogService {
    constructor(private _accountService: AppAccountService, private _http: HttpClient) { }
    apiBaseUrl = '/api/articles';

    saveBlog(blog: IBlogEntry, image?: File){
        const userMail = this._accountService.userMail;
        if (image) {
            return this.uploadImage(image)
                .pipe(switchMap(response => this.saveArticle({...blog, author: userMail, imageName: response.imageName})));
        }
        return this.saveArticle({...blog, author: userMail})
    }

    saveArticle(blogValues: Object): Observable<Object> {
        return this._http.post(`${this.apiBaseUrl}/saveArticle`, blogValues);
    }

    uploadImage(image: File): Observable<{imageName: string}> {
        const formData = new FormData();
        formData.append('file', image);
        return this._http.post<{imageName: string}>(`${this.apiBaseUrl}/image`, formData);
    }
    
}