import { Injectable } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculationServicexxx {

  dutyTax: number;
  salesTax: number;
  private readonly roundToNearest: number = 0.05;

  computeSalesTax(product: ProductsEntity, quantity: number): number {
    if (product.category.taxExempt || product.taxExempt) {
      return 0;
    }

    return this.roundUp(product.unitPrice * quantity * this.salesTax, this.roundToNearest);
  }

  computeDutyTax(product: ProductsEntity, quantity: number): number {
    return !product.imported ? 0 : this.roundUp(product.unitPrice * quantity * this.salesTax, this.roundToNearest);
  }

  /*
   * Sales tax is rounded up to the nearest multiple of $0.05.
   * This rounding is done by item, by type of tax (basic sales tax and import duty tax)
   */
  private roundUp(value: number, nearest: number): number {
    const remainder = value % nearest;
    if (remainder === 0) {
      return value;
    }

    const result = Math.ceil(value / nearest) * nearest;
    return result;
  }
}
