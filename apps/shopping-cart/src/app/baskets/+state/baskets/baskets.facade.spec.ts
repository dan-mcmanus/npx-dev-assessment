import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store, ReducerManager, StoreFeatureModule, ReducerManagerDispatcher } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import * as fromBaskets from '../../+state/baskets/baskets.reducer';
import { BasketService } from '../../services/basket.service';
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
  const createBasketsEntity = (id: string, name = '', selectedProducts = [], transactionFinalized = false): BasketsEntity => ({
    id,
    name: name || `name-${id}`,
    selectedProducts: [],
    transactionFinalized: true
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BASKETS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([BasketsEffects]),
          HttpClientTestingModule
        ],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [BasketsFacade, BasketService, ReducerManager, StoreFeatureModule],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forFeature(
            fromBaskets.BASKETS_FEATURE_KEY,
            fromBaskets.reducer
          ),
          EffectsModule.forFeature([BasketsEffects]),
          CustomFeatureModule,
          HttpClientTestingModule
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });
      TestBed.inject(ReducerManagerDispatcher);

      store = TestBed.inject(Store);
      facade = TestBed.inject(BasketsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBaskets$);
      console.table(list)
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
