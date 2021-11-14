import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BasketService } from '../../services/basket.service';

import * as BasketsActions from './baskets.actions';

@Injectable()
export class BasketsEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasketsActions.init),
      mergeMap(() => this.basketService.getBaskets()
      .pipe(
        map(baskets => BasketsActions.loadBasketsSuccess({ baskets })),
        catchError(error => of(BasketsActions.loadBasketsFailure({error})))
      ))
    )
  })

  constructor(private readonly actions$: Actions, private basketService: BasketService) {}
}
