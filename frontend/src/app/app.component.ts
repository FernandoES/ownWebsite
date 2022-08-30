import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/language/language.service';
import { AppAccountService } from './app-edit/app-account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  subscriptions: Subscription[];
  constructor(language: LanguageService, accountService: AppAccountService) {
    language.init();
    accountService.checkIfLogged().subscribe();
  }
}
