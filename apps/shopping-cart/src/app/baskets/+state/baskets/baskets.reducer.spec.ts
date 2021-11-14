import { Action } from '@ngrx/store';

import * as BasketsActions from './baskets.actions';
import { BasketsEntity } from './baskets.models';
import { State, initialState, reducer } from './baskets.reducer';

describe('Baskets Reducer', () => {
  const createBasketsEntity = (id: string, name = ''): BasketsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Baskets actions', () => {
    it('loadBasketsSuccess should return the list of known Baskets', () => {
      const baskets = [
        createBasketsEntity('PRODUCT-AAA'),
        createBasketsEntity('PRODUCT-zzz'),
      ];
      const action = BasketsActions.loadBasketsSuccess({ baskets });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
