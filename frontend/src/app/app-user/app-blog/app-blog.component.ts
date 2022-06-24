import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.scss']
})
export class AppBlogComponent implements OnInit {

  constructor() { console.log("loading blog component"); }

  ngOnInit(): void {
  }

}
