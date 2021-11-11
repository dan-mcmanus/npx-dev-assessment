/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface Product {
  name: string;
  retailPrice: number;
  isImport: boolean;
  hasBasicTaxExclusion: boolean;
  priceWithTax?: number;
  basketId?: number;
}
