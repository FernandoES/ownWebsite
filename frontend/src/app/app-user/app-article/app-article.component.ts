import { Component, OnInit } from '@angular/core';
import { AppArticleService, IArticle } from './app-article.service';

@Component({
  selector: 'app-app-article',
  templateUrl: './app-article.component.html',
  styleUrls: ['./app-article.component.scss']
})
export class AppArticleComponent implements OnInit {

  public article: IArticle = {} as IArticle;


  constructor(public service: AppArticleService) {   }

  ngOnInit(): void {
    this.service.fetchSigleArticle().subscribe(article => this.article = article);
   }

}
