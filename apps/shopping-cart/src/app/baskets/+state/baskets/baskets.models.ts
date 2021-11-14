import { Product } from "@npx-dev/products";

/**
 * Interface for the 'Baskets' data
 */
export interface BasketsEntity {
  id: number | string; // Primary ID
  name: string;
  selectedProducts?: Product[];
  transactionFinalized: boolean;
}
