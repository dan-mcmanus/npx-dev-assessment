import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BasketsActions from './baskets.actions';
import { BasketsEntity } from './baskets.models';

export const BASKETS_FEATURE_KEY = 'baskets';

export interface State extends EntityState<BasketsEntity> {
  selectedId?: string | number; // which Baskets record has been selected
  loaded: boolean; // has the Baskets list been loaded
  error?: string | null; // last known error (if any)
}

export interface BasketsPartialState {
  readonly [BASKETS_FEATURE_KEY]: State;
}

export const basketsAdapter: EntityAdapter<BasketsEntity> =
  createEntityAdapter<BasketsEntity>();

export const initialState: State = basketsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const basketsReducer = createReducer(
  initialState,
  on(BasketsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BasketsActions.loadBasketsSuccess, (state, { baskets }) =>
    basketsAdapter.setAll(baskets, { ...state, loaded: true })
  ),
  on(BasketsActions.loadBasketsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return basketsReducer(state, action);
}
