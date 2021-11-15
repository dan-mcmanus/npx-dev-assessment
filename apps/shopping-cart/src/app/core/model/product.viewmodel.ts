
export class ProductVm {
  id: string | number; // Primary ID
  name: string;
  unitPrice: number;
  imported: boolean;
  hasBasicTaxExemption: boolean;
  salesTaxPercent: number;
  quantity = 1;
  priceWithTax?: number;



  constructor(
    id: number,// Primary ID
    name: string,
    unitPrice: number,
    imported: boolean,
    taxExempt: boolean,
    salesTaxPercent: number,
    quantity: number,
    priceWithTax?: number,
) {

    this.id = id;
    this.name = name;
    this.imported = imported;
    this.hasBasicTaxExemption = taxExempt;
    this.quantity = quantity;
    this.salesTaxPercent = salesTaxPercent
    this.priceWithTax = priceWithTax;

  }


}
