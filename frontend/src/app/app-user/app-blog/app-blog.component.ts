import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogEntry, UserService } from '../app-user.service';

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

  public blogList$: Observable<IBlogEntry[]> = this._userService.fetchArticlesList();

  constructor(
    private _userService: UserService, 
    private _router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void { }

  goToArticle(item: IBlogEntry) {
    this._router.navigate([this.getArticleLink(item)], { relativeTo: this.route})
  }

  getArticleLink(item: IBlogEntry): string {
    return `../article/${item._id}`;
  }
}
