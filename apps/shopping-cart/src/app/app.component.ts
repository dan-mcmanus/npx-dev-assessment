import { Component } from '@angular/core';

@Component({
  selector: 'npx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';
  log(event) {
    console.log(event);
  }
}
