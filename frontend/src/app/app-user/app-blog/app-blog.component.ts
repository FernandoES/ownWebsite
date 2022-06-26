import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppBlogService, IBlogEntry } from './app-blog.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-blog'
  }
})
export class AppBlogComponent implements OnInit {

  public blogList$: Observable<IBlogEntry[]> = this._service.fetchArticlesList().pipe(tap(entry =>console.log("entry", entry)));

  constructor(
    private _service: AppBlogService, 
    private _router: Router,
    private route: ActivatedRoute
    ) { 
      console.log("loading blog component"); 
    }

  ngOnInit(): void { }

  goToArticle(item: IBlogEntry) {
    this._router.navigate([this.getArticleLink(item)], { relativeTo: this.route})
  }

  getArticleLink(item: IBlogEntry): string {
    return `../article/${item.id}`;
  }
}
