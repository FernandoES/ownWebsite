import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

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
      url: "blog",
      nameTag: "blog",
      slug: "blog"
    },
    {
      url: "suggestions",
      nameTag: "suggestions",
      slug: "suggestions"
    },
    {
      url: "admin",
      nameTag: "admin",
      slug: "admin"
    }
  ];
  constructor(_ref: ChangeDetectorRef) { }

  ngOnInit(): void {  }
}
