import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  b = [{c: 1},{c: 2},{c: 3}];
  title = 'frontend';
}
