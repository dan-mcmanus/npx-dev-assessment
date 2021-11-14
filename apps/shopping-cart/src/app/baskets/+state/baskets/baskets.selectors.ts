import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BASKETS_FEATURE_KEY, State, basketsAdapter } from './baskets.reducer';

// Lookup the 'Baskets' feature state managed by NgRx
export const getBasketsState =
  createFeatureSelector<State>(BASKETS_FEATURE_KEY);

const { selectAll, selectEntities } = basketsAdapter.getSelectors();

export const getBasketsLoaded = createSelector(
  getBasketsState,
  (state: State) => state.loaded
);

export const getBasketsError = createSelector(
  getBasketsState,
  (state: State) => state.error
);

export const getAllBaskets = createSelector(getBasketsState, (state: State) =>
  selectAll(state)
);

export const getBasketsEntities = createSelector(
  getBasketsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBasketsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBasketsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
