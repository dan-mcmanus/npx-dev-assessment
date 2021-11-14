import { createAction, props } from '@ngrx/store';
import { BasketsEntity } from './baskets.models';

export const init = createAction('[Baskets Page] Init');

export const loadBasketsSuccess = createAction(
  '[Baskets/API] Load Baskets Success',
  props<{ baskets: BasketsEntity[] }>()
);

export const loadBasketsFailure = createAction(
  '[Baskets/API] Load Baskets Failure',
  props<{ error: any }>()
);
