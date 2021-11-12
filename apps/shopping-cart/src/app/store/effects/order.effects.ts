import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as OrderActions from '../actions';
import { OrderDataService } from '../../services';
import { Order } from '../../core/model/order';
import { of } from 'rxjs';

@Injectable()
export class OrderEffects {

  getOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrderActions.GET_ORDERS),
      mergeMap((orderId: number) => this.orderDataService.getOrders(orderId)))
      .pipe(
        map((orders: Order[]) => OrderActions.GetOrdersSuccess({ orders })),
        catchError(error => of(OrderActions.GetOrdersError({ error })))
      )
  });

  constructor(
    private actions$: Actions,
    private orderDataService: OrderDataService
  ) {}
}
