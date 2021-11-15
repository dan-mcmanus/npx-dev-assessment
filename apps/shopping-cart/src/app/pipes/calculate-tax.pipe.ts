import { Pipe, PipeTransform } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';
import { TaxRule } from '../shared/tax-rule.model';

@Pipe({
  name: 'calculateTax'
})
export class CalculateTaxPipe implements PipeTransform {

  transform(product: ProductsEntity, taxType: string): number {
    const taxRule = new TaxRule();

    const salesTax = taxRule.computeSalesTax(product, 1);
    const dutyTax = taxRule.computeDutyTax(product, 1);
    const computedTax = dutyTax + salesTax;
    const totalWithoutTax = product.unitPrice;
    const total = computedTax + totalWithoutTax;

    switch (taxType?.toLowerCase()) {
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
