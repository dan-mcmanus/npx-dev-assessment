import { ProductsEntity } from "@npx-dev/products";


/**
 * Interface for the 'Baskets' data
 */
export interface BasketsEntity {
  id: number | string; // Primary ID
  name: string;
  selectedProducts?: ProductsEntity[];
  transactionFinalized: boolean;
}

