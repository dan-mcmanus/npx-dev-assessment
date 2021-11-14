import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as BasketsActions from './baskets.actions';
import { BasketsEffects } from './baskets.effects';

describe('BasketsEffects', () => {
  let actions: Observable<Action>;
  let effects: BasketsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BasketsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BasketsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BasketsActions.init() });

      const expected = hot('-a-|', {
        a: BasketsActions.loadBasketsSuccess({ baskets: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});