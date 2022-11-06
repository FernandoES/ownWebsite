import { Component, Pipe, PipeTransform } from "@angular/core";
import { Routes } from "@angular/router";
import { Observable, of, Subject } from "rxjs";
import { Petition } from "src/app/app-account/app-account.service";
import { IBlogEntry } from "src/app/app-user/app-user.service";

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
        this.logged = true;
        this.loggedIn$.next(true);
        return of(`${mail}${password}`);
    }
    acceptPetition(petition: Petition) {
        return of('');
    }
    fetchAccountPetitions() {
        return of({accountPetitions: petitions});
    }
}

export class TestNotificationService {
    success() {}
}

export class TestAppArticleService {
    
    fetchSigleArticle(id: string) {
        return of({});
    }

    fetchImage(imageName: string) {
        return of({});
    }

    deleteArticle(articleId: string) {
        return of({});
    }
}

export class FakeRoute {
    navigateByUrl(...args: any[]) {
        return new Promise(() => {});
    }
}

@Pipe({ name: 'ownLanguage' })
export class TestLanguagePipe implements PipeTransform {
    transform(value: any, options?: any) {
        return value;
    }
}

@Component({
    template: ''
})
export class DummyComponent {}

export const routes: Routes = [
    {path: 'test', component: DummyComponent}
];

export const fakeBlogEntry: IBlogEntry = {
    title: "titleTest",
    body: "bodyTest",
    _id: "_idTest",
    authorName: "authorNameTest",
    authorMail: "authorMailTest",
    imagePath: "imagePathTest",
}

export const streamToBeListed$: Observable<any> = of( [{
    title: "firstTestTitle",
},
{
    title: "secondTestTitle"
}]);

export class FakeUserService {
    fetchArticlesList() {
        return of([fakeBlogEntry]);
    }
}

export class FakeSuggestionsService {
    
}