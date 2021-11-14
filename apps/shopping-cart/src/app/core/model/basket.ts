import { Product } from "@npx-dev/products";

export interface Basket {
  id: number | string
  name: string;
  selectedProducts?: Product[];
  transactionFinalized: boolean;
}

export interface BasketEntity {
  id: number | string
  name: string;
  selectedProducts?: Product[];
  transactionFinalized: boolean;
}
