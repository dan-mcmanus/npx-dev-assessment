/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable    @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsEntity } from '@npx-dev/products';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'npx-dev-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input()
  product?: ProductsEntity
  addToCartCtrl = new FormControl('');
  private inCartSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  addProductToCart$ = this.inCartSub.asObservable();

  constructor() { }


  ngOnInit(): void {
    this.addToCartCtrl.valueChanges
      .pipe(
        tap(val => this.inCartSub.next(val))
      ).subscribe(x => console.log(x));
  }

}
