import { Pipe, PipeTransform } from "@angular/core";
import { of, Subject } from "rxjs";
import { Petition } from "src/app/app-account/app-account.service";

export const petitions = [{
    userName: 'userName1',
    userMail: 'userMail1',
    _id: 1
},
{
    userName: 'userName2',
    userMail: 'userMail2',
    _id: 2
}
] as Petition[];
export class TestAppAccountService {
    logged = false;
    loggedIn$ = new Subject<boolean>();
    sendLogin(mail: string, password: string) {
        console.log('login Sent');
        return of(`${mail}${password}`);
    }
    acceptPetition(petition: Petition) {
        return of('');
    }
    fetchAccountPetitions() {
        console.log("fetching petitions");
        
    return of({accountPetitions: petitions});
    }
}

export class TestNotificationService {
    success() {}
}

@Pipe({ name: 'ownLanguage' })
export class TestLanguagePipe implements PipeTransform {
    transform(value: any, options?: any) {
        return value;
    }
}