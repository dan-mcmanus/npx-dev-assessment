import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsFacade } from '../../+state/products/products.facade';

@Component({
  selector: 'npx-dev-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  allProducts$ = this.productsFacade.allProducts$;
  selectedProducts$ = this.productsFacade.selectedProducts$;

  constructor(public productsFacade: ProductsFacade) {
    this.productsFacade.init();
   }

}
