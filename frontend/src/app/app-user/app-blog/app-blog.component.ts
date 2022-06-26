import { Component, OnInit } from '@angular/core';
import { AppBlogService } from './app-blog.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.scss']
})
export class AppBlogComponent implements OnInit {

  public blogList$ = this._service.fetchArticlesList().pipe(tap(entry =>console.log("entry", entry)));

  constructor(private _service: AppBlogService) { console.log("loading blog component"); }

  ngOnInit(): void { }

}
