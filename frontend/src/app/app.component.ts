import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from 'src/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'frontend';
  constructor(language: LanguageService, ref: ChangeDetectorRef) {
    language.init();
    language.languageChanged.subscribe(_ => {ref.markForCheck(); console.log("updated")});
  }
}
