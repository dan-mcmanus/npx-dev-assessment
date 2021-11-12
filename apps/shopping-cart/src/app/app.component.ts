import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsFacade } from '@npx-dev/products';

@Component({
  selector: 'npx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(private productsFacade: ProductsFacade) {

  }
}
