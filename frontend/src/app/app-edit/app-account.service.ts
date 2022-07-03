import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AppAccountService {
    constructor() { }
    sendLogin(){
        return of({});
    }
    restorePassword() {
        return of({});
    }

    createAccount(){
        return of({});
    }
}