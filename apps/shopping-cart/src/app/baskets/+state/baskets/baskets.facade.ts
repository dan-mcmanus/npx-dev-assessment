import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as BasketsActions from './baskets.actions';
import * as BasketsSelectors from './baskets.selectors';

@Injectable()
export class BasketsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(BasketsSelectors.getBasketsLoaded));
  allBaskets$ = this.store.pipe(select(BasketsSelectors.getAllBaskets));
  selectedBaskets$ = this.store.pipe(select(BasketsSelectors.getSelected));


  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(BasketsActions.init());
  }


}
