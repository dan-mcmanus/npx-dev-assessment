import { ProductsEntity } from "@npx-dev/products";
import { TaxRule } from "../../shared/tax-rule.model";

export class ReceiptVm {
  product: ProductsEntity;
  quantity = 1;
  taxRule: TaxRule;
  salesTax: number;
  dutyTax: number;
  computedTax: number;
  totalWithoutTax: number;
  total: number;


  constructor(product: ProductsEntity, taxRule: TaxRule, salesTax: number, dutyTax: number, computedTax: number, totalWithoutTax: number, total: number) {
    this.product = product;
    this.taxRule = taxRule;
    this.salesTax = salesTax;
    this.dutyTax = dutyTax;
    this.computedTax = computedTax;
    this.totalWithoutTax = totalWithoutTax;
    this.total = total;
  }
}
