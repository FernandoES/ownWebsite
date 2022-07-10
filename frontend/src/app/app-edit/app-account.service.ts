import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';

@Injectable()
export class AppAccountService {
    logged = false;
    userMail: string;
    constructor() { }
    sendLogin(){
        return of({}).pipe(tap(
            {
            next: () => {this.logged = true;},
            error: () => {}
        }
        ));
    }
    restorePassword() {
        return of({});
    }

    createAccount(){
        return of({});
    }
}