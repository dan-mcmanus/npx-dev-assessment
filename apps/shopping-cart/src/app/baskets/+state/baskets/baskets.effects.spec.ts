import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import * as BasketsActions from './baskets.actions';
import { BasketsEffects } from './baskets.effects';
import { BasketsEntity } from './baskets.models';

describe('BasketsEffects', () => {
  let actions: Observable<Action>;
  let effects: BasketsEffects;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [
        BasketsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BasketsEffects);
  });

  describe('init$', () => {
    test('should work', () => {
      const payload = {

      }
      actions = hot('-a-|', { a: BasketsActions.init() });
      const baskets = new Array<BasketsEntity>()
      const expected = hot('-a-|', {
        a: BasketsActions.loadBasketsSuccess({  baskets }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
