import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
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

  public article$: Observable<IBlogEntry> = this._route.params.pipe(switchMap(params => 
    this.service.fetchSigleArticle(params['id'])));


  constructor(public service: AppArticleService, private _route: ActivatedRoute) {   }

}
