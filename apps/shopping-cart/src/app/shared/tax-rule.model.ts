import { ProductsEntity } from "@npx-dev/products";

export class TaxRule {

  dutyTax = 0.05;
  salesTax = 0.1;
  private readonly roundToNearest: number = 0.05;

  computeSalesTax(product: ProductsEntity, quantity: number = 1): number {
    if (product.category.taxExempt || product.taxExempt) {
      this.salesTax = 0;
      return this.salesTax;
    }

    return this.roundUp(product.unitPrice * quantity * this.salesTax, this.roundToNearest);
  }

  computeDutyTax(product: ProductsEntity, quantity: number = 1): number {
    return !product.imported ? 0.00 : this.roundUp(product.unitPrice * quantity * this.dutyTax, this.roundToNearest);
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
