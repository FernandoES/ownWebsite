import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { AppAccountService } from '../app-account.service';

@Injectable()
export class AppCreateBlogService {
    constructor(private _accountService: AppAccountService, private _http: HttpClient) { }
    apiBaseUrl = '/api/articles/saveArticle';

    saveBlog(blog: IBlogEntry){
        const userMail = this._accountService.userMail;
        return this._http.post(this.apiBaseUrl, {...blog, author: userMail});
    }
    
}