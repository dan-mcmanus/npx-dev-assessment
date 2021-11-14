/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: string | number; // Primary ID
  name: string;
  retailPrice: number;
  isImport: boolean;
  hasBasicTaxExclusion: boolean;
  priceWithTax?: number;
  quantity: number;
  basketId?: number;
  stringRetailPrice?: string;
}

export interface Product {
  id: string | number; // Primary ID
  name: string;
  retailPrice: number;
  isImport: boolean;
  hasBasicTaxExclusion: boolean;
  priceWithTax?: number;
  quantity: number;
  basketId?: number;
  stringRetailPrice?: string;
}
