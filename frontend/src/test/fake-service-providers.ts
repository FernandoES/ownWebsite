import { Pipe, PipeTransform } from "@angular/core";
import { off } from "process";
import { of } from "rxjs";

export class TestAppAccountService {
    sendLogin(mail: string, password: string) {
        return of(`${mail}${password}`);
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