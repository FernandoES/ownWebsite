import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { AppArticleService, IArticle } from './app-article.service';

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
export class AppArticleComponent implements OnInit {

  public article: IArticle = {} as IArticle;


  constructor(public service: AppArticleService, private _route: ActivatedRoute) {   }

  ngOnInit(): void {    
    const id = this._route.snapshot.paramMap.get('id') ?? "";
    this.service.fetchSigleArticle(id).subscribe(article => this.article = article);
   }

}
