/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: string | number; // Primary ID
  name: string;
  category: Category;
  unitPrice: number;
  imported: boolean;
  taxExempt: boolean;
}


export class Category {
  name: string;
  taxExempt: boolean;

  constructor(name: string, taxExempt: boolean = false) {
    this.name = name;
    this.taxExempt = taxExempt;
  }
}

