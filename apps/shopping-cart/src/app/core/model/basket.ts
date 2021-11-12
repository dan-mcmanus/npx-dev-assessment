import { Product } from "@npx-dev/products";

export interface Basket {
  id: number;
  name: string;
  selectedProducts?: Product[];
  transactionFinalized: boolean;
}

export interface BasketEntity {
  id: number;
  name: string;
  selectedProducts?: Product[];
  transactionFinalized: boolean;
}
