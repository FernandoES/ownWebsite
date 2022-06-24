import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

export interface LinkOption  {
  url: string,
  nameTag: string,
  slug: string
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-header'
  }
})
export class AppHeaderComponent implements OnInit {
  options:LinkOption[]= [
    {
      url: "#/user/blog",// investigar como sustituir por el ultimo paso
      nameTag: "blog",
      slug: "blog"
    },
    {
      url: "#/user/suggestions",
      nameTag: "suggestions",
      slug: "suggestions"
    },
    {
      url: "#/edit",
      nameTag: "edit",
      slug: "edit"
    }
  ];

  get currentUrl() {
    return `#/${this._router.url}`;
  }
  constructor(_ref: ChangeDetectorRef, private _router: Router) { }

  ngOnInit(): void {  }
}
