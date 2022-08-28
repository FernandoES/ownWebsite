import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable()
export class AppAccountService {
    logged = false;
    loggedIn$ = new Subject<boolean>();
    userMail: string;
    userName: string;
    apiBaseUrl = '/api/login';
    constructor(private _http : HttpClient) { }
    sendLogin(userMail: string, password: string){
        return this._http.post(`${this.apiBaseUrl}/login`, {userMail, password }).pipe(tap({
            next: (response: any) => {
                this.logged = true;
                this.loggedIn$.next(true);
                this.userMail = response.params.userMail;
                this.userName = response.params.userName;

            }
        }));
    }
    restorePassword(userMail: string, oldPassword: string, newPassword: string) {
        return this._http.post(`${this.apiBaseUrl}/restorePassword`,
        {userMail: userMail, oldPassword: oldPassword, newPassword: newPassword});
    }

    createAccount(userMail: string, userName: string, password: string){
        return this._http.post(`${this.apiBaseUrl}/createAccount`, {userMail, userName,password });
    }
}