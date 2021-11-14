import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as BasketsActions from './baskets.actions';
import { BasketsEffects } from './baskets.effects';
import { BasketsFacade } from './baskets.facade';
import { BasketsEntity } from './baskets.models';
import {
  BASKETS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './baskets.reducer';
import * as BasketsSelectors from './baskets.selectors';

interface TestSchema {
  baskets: State;
}

describe('BasketsFacade', () => {
  let facade: BasketsFacade;
  let store: Store<TestSchema>;
  const createBasketsEntity = (id: string, name = ''): BasketsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BASKETS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BasketsEffects]),
        ],
        providers: [BasketsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BasketsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBaskets$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBaskets$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadBasketsSuccess` to manually update list
     */
    it('allBaskets$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBaskets$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BasketsActions.loadBasketsSuccess({
          baskets: [createBasketsEntity('AAA'), createBasketsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBaskets$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
