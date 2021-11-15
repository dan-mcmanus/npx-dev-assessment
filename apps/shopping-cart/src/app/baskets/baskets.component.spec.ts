import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BasketsFacade } from './+state/baskets/baskets.facade';
import {
  BASKETS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from '../../app/baskets/+state/baskets/baskets.reducer';
import { BasketsComponent } from './baskets.component';
interface TestSchema {
  baskets: State;
}
describe('BasketsComponent', () => {
  let component: BasketsComponent;
  let fixture: ComponentFixture<BasketsComponent>;
  let facade: BasketsFacade;
  let store: Store<TestSchema>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketsComponent ],
      providers: [BasketsFacade, Store]
    })
    .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(Store);
    facade = TestBed.inject(BasketsFacade);

    fixture = TestBed.createComponent(BasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
