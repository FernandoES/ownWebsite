import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';

export interface Logged {
    logged: true;
    userMail?: string;
    userName?: string;
}

export interface Petition {
    userName: string;
    userMail: string;
    _id: number;
}
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

    createAccount(userMail: string, userName: string, password: string): Observable<{status: string}>{
        return this._http.post<{status: string}>(`${this.apiBaseUrl}/createAccount`, {userMail, userName,password });
    }

    checkIfLogged() {
        return this._http.get<Logged>(`${this.apiBaseUrl}/isLogged`).pipe(tap(response => {
            this.logged = response.logged;
            if (this.logged) {
                this.userMail = response.userMail as string;
                this.userName = response.userName as string;
                this.loggedIn$.next(true);
            }
        }));
    }

    logout() {
        return this._http.delete<{status: string}>(`${this.apiBaseUrl}/logout`).pipe(tap(() => {
            this.logged = false;
            this.userMail = '';
            this.userName = '';
            this.loggedIn$.next(false);
        }));
    }

    fetchAccountPetitions() {
        return this._http.get<{accountPetitions: Petition[]}>(`${this.apiBaseUrl}/accountPetitions`);
    }

    acceptPetition(petitionId: number) {
        return this._http.post<{status: string}>(`${this.apiBaseUrl}/accountPetitions/accept`, {petitionId});
    }

    rejectPetition(petitionId: number) {
        return this._http.post<{status: string}>(`${this.apiBaseUrl}/accountPetitions/reject`,  {petitionId});
    }
}