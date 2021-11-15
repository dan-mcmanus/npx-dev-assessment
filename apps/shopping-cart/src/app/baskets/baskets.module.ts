import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BasketsComponent } from './baskets.component';
import { BasketService } from './services/basket.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBaskets from './+state/baskets/baskets.reducer';
import { BasketsEffects } from './+state/baskets/baskets.effects';
import { BasketsFacade } from './+state/baskets/baskets.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CalculateTaxPipe } from '../pipes/calculate-tax.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(
      fromBaskets.BASKETS_FEATURE_KEY,
      fromBaskets.reducer
    ),
    EffectsModule.forFeature([BasketsEffects]),
  ],
  declarations: [BasketsComponent, CalculateTaxPipe],
  exports: [BasketsComponent],
  providers: [BasketService, BasketsFacade],
})
export class BasketsModule {}
