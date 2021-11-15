import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products/products.reducer';
import { ProductsEffects } from './+state/products/products.effects';
import { ProductsFacade } from './+state/products/products.facade';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './services/products.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: ProductsFormComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacade, ProductsService],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductsFormComponent
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent,
    ProductsFormComponent
  ],
})
export class ProductsModule {}
