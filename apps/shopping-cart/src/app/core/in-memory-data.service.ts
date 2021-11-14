import { Injectable } from '@angular/core';
import { Product } from '@npx-dev/products';

import { RequestInfo, InMemoryDbService } from 'angular-in-memory-web-api';
import { Basket } from './model/basket';

import { Order } from './model/order';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;
  maxId = 0;

  /** Create the in-memory database. Sample data is found below. */
  createDb(reqInfo?: RequestInfo) {
    return { baskets, products};
  }

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

}

const products: Product[] =
[
  {
    "id": 1,
    "name": "16lb bag of Skittles",
    "retailPrice": 16.00,
    "isImport": false,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 1
  },
  {
    "id": 2,
    "name": "Walkman",
    "retailPrice": 99.99,
    "isImport": false,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 1
  },
  {
    "id": 3,
    "name": "bag of microwave Popcorn",
    "retailPrice": 0.99,
    "isImport": false,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 1
  },
  {
    "id": 4,
    "name": "bag of Vanilla-Hazelnut Coffee",
    "retailPrice": 11.00,
    "isImport": true,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 2
  },
  {
    "id": 5,
    "name": "Vespa",
    "retailPrice": 15001.25,
    "isImport": true,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 2
  },
  {
    "id": 6,
    "name": "crate of Almond Snickers",
    "retailPrice": 75.99,
    "isImport": true,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 3
  },
  {
    "id": 7,
    "name": "Bottle of Wine",
    "retailPrice": 10.00,
    "isImport": true,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 3
  },
  {
    "id": 8,
    "name": "300# bag of Fair-Trade Coffee",
    "retailPrice": 997.99,
    "isImport": false,
    "hasBasicTaxExclusion": false,
    "priceWithTax": 0,
    "quantity": 1,
    "basketId": 3
  }
]

const baskets: Basket[] = [
  {
    "id": 1,
    "name": "Basket 1",
    "selectedProducts": [
      {
        "id": 1,
        "name": "16lb bag of Skittles",
        "retailPrice": 16.00,
        "isImport": false,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      },
      {
        "id": 2,
        "name": "Walkman",
        "retailPrice": 99.99,
        "isImport": false,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      },
      {
        "id": 3,
        "name": "bag of microwave Popcorn",
        "retailPrice": 0.99,
        "isImport": false,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      }
    ],
    "transactionFinalized": false
  },
  {
    "id": 2,
    "name": "Basket 2",
    "selectedProducts": [
      {
        "id": 4,
        "name": "bag of Vanilla-Hazelnut Coffee",
        "retailPrice": 11.00,
        "isImport": true,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      },
      {
        "id": 5,
        "name": "Vespa",
        "retailPrice": 15001.25,
        "isImport": true,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      }
    ],
    "transactionFinalized": false
  },
  {
    "id": 3,
    "name": "Basket 3",
    "selectedProducts": [
      {
        "id": 6,
        "name": "crate of Almond Snickers",
        "retailPrice": 75.99,
        "isImport": true,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      },
      {
        "id": 7,
        "name": "Bottle of Wine",
        "retailPrice": 10.00,
        "isImport": true,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      },
      {
        "id": 8,
        "name": "300# bag of Fair-Trade Coffee",
        "retailPrice": 997.99,
        "isImport": false,
        "hasBasicTaxExclusion": false,
        "priceWithTax": 0,
        "quantity": 1
      }
    ],
    "transactionFinalized": false
  }
];



