import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { AppAccountService } from '../app-account.service';

@Injectable()
export class AppCreateBlogService {
    constructor(private _accountService: AppAccountService) { }

    saveBlog(blog: IBlogEntry){
        const userMail = this._accountService.userMail;
        return of({blog, userMail});
    }
    
}