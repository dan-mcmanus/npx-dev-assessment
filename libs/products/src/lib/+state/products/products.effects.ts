import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';

import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {

  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.init),
      mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => ProductsActions.loadProductsSuccess({ products })),
        catchError(error => of(ProductsActions.loadProductsFailure({error})))
      ))
    )
  })

  constructor(private readonly actions$: Actions, private productService: ProductsService) {}
}
