import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
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
export class AppHeaderComponent {
  options:LinkOption[]= [
    {
      url: "user/blog",
      nameTag: "blog",
      slug: "header.blog"
    },
    {
      url: "user/suggestion",
      nameTag: "suggestion",
      slug: "header.suggestions"
    },
    {
      url: "edit",
      nameTag: "login",
      slug: "header.login"
    }
  ];

  constructor(_ref: ChangeDetectorRef, public language: LanguageService) { }

  changeLanguage(lng: string) {
    this.language.changeLanguage(lng);
  }
}
