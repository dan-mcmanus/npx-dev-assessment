import { BasketsEntity } from './baskets.models';
import {
  basketsAdapter,
  BasketsPartialState,
  initialState,
} from './baskets.reducer';
import * as BasketsSelectors from './baskets.selectors';

describe('Baskets Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBasketsId = (it: BasketsEntity) => it.id;
  const createBasketsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BasketsEntity);

  let state: BasketsPartialState;

  beforeEach(() => {
    state = {
      baskets: basketsAdapter.setAll(
        [
          createBasketsEntity('PRODUCT-AAA'),
          createBasketsEntity('PRODUCT-BBB'),
          createBasketsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Baskets Selectors', () => {
    it('getAllBaskets() should return the list of Baskets', () => {
      const results = BasketsSelectors.getAllBaskets(state);
      const selId = getBasketsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BasketsSelectors.getSelected(state) as BasketsEntity;
      const selId = getBasketsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getBasketsLoaded() should return the current "loaded" status', () => {
      const result = BasketsSelectors.getBasketsLoaded(state);

      expect(result).toBe(true);
    });

    it('getBasketsError() should return the current "error" state', () => {
      const result = BasketsSelectors.getBasketsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
