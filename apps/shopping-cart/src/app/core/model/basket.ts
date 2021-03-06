import { ProductsEntity } from "@npx-dev/products";

export interface Basket {
  id: number | string
  name: string;
  selectedProducts?: ProductsEntity[];
  transactionFinalized: boolean;
}

