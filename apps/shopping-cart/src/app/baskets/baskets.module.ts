import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BasketsComponent } from './baskets.component';
import { BasketService } from './services/basket.service';




@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasketsComponent],
  exports: [BasketsComponent],
  providers: [ BasketService ]
})
export class BasketsModule {}
