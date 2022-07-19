import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class AppAccountService {
    logged = false;
    userMail: string;
    apiBaseUrl = '/api/login';
    constructor(private _http : HttpClient) { }
    sendLogin(userMail: string, password: string){
        return this._http.post(`${this.apiBaseUrl}/login`, {userMail, password }).pipe(tap({
            next: () => {
                this.logged = true;
                this.userMail = userMail;
            }
        }));
    }
    restorePassword(userMail: string, oldPassword: string, newPassword: string) {
        return this._http.post(`${this.apiBaseUrl}/restorePassword`,
        {userMail: userMail, oldPassword: oldPassword, newPassword: newPassword});
    }

    createAccount(userMail: string, password: string){
        return this._http.post(`${this.apiBaseUrl}/createAccount`, {userMail, password });
    }
}