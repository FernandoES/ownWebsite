import { Pipe, PipeTransform } from "@angular/core";
import { of } from "rxjs";
import { Petition } from "src/app/app-account/app-account.service";

export class TestAppAccountService {
    sendLogin(mail: string, password: string) {
        console.log('login Sent');
        return of(`${mail}${password}`);
    }
    fetchAccountPetitions() {
        const petitions = [{
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
    return of(petitions);
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