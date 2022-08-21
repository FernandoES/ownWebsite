import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { catchError, map, Observable, of, Subject, switchMap } from 'rxjs';
import { IBlogEntry } from '../app-user.service';
import { AppArticleService } from './app-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './app-article.component.html',
  styleUrls: ['./app-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-article'
  }
})
export class AppArticleComponent {
  error$ = new Subject<string>();

  public article$: Observable<IBlogEntry> = this._route.params.pipe(
    switchMap(params => this.service.fetchSigleArticle(params['id'])),
    switchMap(response => {
      if (response?.imageName) {
        return this.service.fetchImage(response.imageName).pipe(map(imagePath => {
          return {...response, imagePath: imagePath}}));
      }
      return of(response);
    }),
    catchError(e => {
      this.error$.next(e.error.status);
      return of();
    })
    );


  constructor(public service: AppArticleService, private _route: ActivatedRoute) {   }
}
