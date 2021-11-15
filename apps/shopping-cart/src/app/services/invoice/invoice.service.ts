import { Injectable } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';
import { TaxCalculationServicexxx } from '../../shared/tax-calculation.service';
import { TaxRule } from '../../shared/tax-rule.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  dutyTax: number;
  salesTax: number;
  taxRule: TaxRule;

  private _basketItem : BasketItem;
  public get basketItem() : BasketItem {
    return this._basketItem;
  }
  public set basketItem(v : BasketItem) {
    this._basketItem = v;
  }


  constructor(/* private taxService: TaxCalculationService */) {
    this.taxRule = new TaxRule();
    this.salesTax = this.taxRule.computeSalesTax(this.basketItem.product, this.basketItem.quantity)
    this.dutyTax = this.taxRule.computeDutyTax(this.basketItem.product, this.basketItem.quantity);
  }


  public get computedTax() : number {
    return this.dutyTax + this.salesTax;
  }


  public get totalWithoutTax() : number {
    return this.basketItem.quantity * this.basketItem.product.unitPrice;
  }



  public get total() : number {
    return this.computedTax + this.totalWithoutTax;
  }


}

export class BasketItem {
  product: ProductsEntity;
  quantity: number;

  constructor(product: ProductsEntity, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
