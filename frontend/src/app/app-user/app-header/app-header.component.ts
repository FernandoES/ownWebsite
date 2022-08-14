import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from 'src/language/language.service';

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
      url: "user/blog",
      nameTag: "blog",
      slug: "header.blog"
    },
    {
      url: "user/suggestions",
      nameTag: "suggestions",
      slug: "header.suggestions"
    },
    {
      url: "edit",
      nameTag: "edit",
      slug: "header.edit"
    }
  ];

  constructor(_ref: ChangeDetectorRef, public language: LanguageService) { }

  ngOnInit(): void { }
  changeLanguage(lng: string) {
    this.language.changeLanguage(lng);
  }
}
