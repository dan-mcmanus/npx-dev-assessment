import { Pipe, PipeTransform } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';
import { TaxRule } from '../tax-rule.model';

@Pipe({
  name: 'calculateTax'
})
export class CalculateTaxPipe implements PipeTransform {

  transform(product: ProductsEntity, taxType: 'computed' | 'totalwithouttax' | 'total', quantity: number = 1): number {
    const taxRule = new TaxRule();

    const salesTax = taxRule.computeSalesTax(product, quantity);
    const dutyTax = taxRule.computeDutyTax(product, quantity);
    const computedTax = dutyTax + salesTax;
    const totalWithoutTax = product.unitPrice * quantity;
    const total = computedTax + totalWithoutTax;

    switch (taxType) {
      case 'computed':
        return computedTax;
        case 'totalwithouttax':
          return totalWithoutTax;
        case 'total':
            return total;
        default:
          return 0;
    }
  }

}
