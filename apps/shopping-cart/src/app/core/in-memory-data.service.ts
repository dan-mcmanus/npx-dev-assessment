import { Injectable } from '@angular/core';

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
    return { baskets, orders };
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

const orders: Order[] = [
  {
    'id': 1,
    'customerId': 1,
    'orderItems': [
      { 'id': 1, 'productName': 'Baseball', 'itemCost': 9.99 },
      { 'id': 2, 'productName': 'Bat', 'itemCost': 19.99 }
    ]
  },
  {
    'id': 2,
    'customerId': 2,
    'orderItems': [
      { 'id': 3, 'productName': 'Basketball', 'itemCost': 7.99 },
      { 'id': 4, 'productName': 'Shoes', 'itemCost': 199.99 }
    ]
  },
  {
    'id': 3,
    'customerId': 3,
    'orderItems': [
      { 'id': 5, 'productName': 'Frisbee', 'itemCost': 2.99 },
      { 'id': 6, 'productName': 'Hat', 'itemCost': 5.99 }
    ]
  },
  {
    'id': 4,
    'customerId': 4,
    'orderItems': [
      { 'id': 7, 'productName': 'Boomerang', 'itemCost': 29.99 },
      { 'id': 8, 'productName': 'Helmet', 'itemCost': 19.99 },
      { 'id': 9, 'productName': 'Kangaroo Saddle', 'itemCost': 179.99 }
    ]
  },
  {
    'id': 5,
    'customerId': 5,
    'orderItems': [
      { 'id': 10, 'productName': 'Budgie Smugglers', 'itemCost': 19.99 },
      { 'id': 11, 'productName': 'Swimming Cap', 'itemCost': 5.49 }
    ]
  },
  {
    'id': 6,
    'customerId': 6,
    'orderItems': [
      { 'id': 12, 'productName': 'Bow', 'itemCost': 399.99 },
      { 'id': 13, 'productName': 'Arrows', 'itemCost': 69.99 }
    ]
  },
  {
    'id': 7,
    'customerId': 7,
    'orderItems': [
      { 'id': 14, 'productName': 'Baseball', 'itemCost': 9.99 },
      { 'id': 15, 'productName': 'Bat', 'itemCost': 19.99 }
    ]
  },
  {
    'id': 8,
    'customerId': 8,
    'orderItems': [
      { 'id': 16, 'productName': 'Surfboard', 'itemCost': 299.99 },
      { 'id': 17, 'productName': 'Wax', 'itemCost': 5.99 },
      { 'id': 18, 'productName': 'Shark Repellent', 'itemCost': 15.99 }
    ]
  },
  {
    'id': 9,
    'customerId': 9,
    'orderItems': [
      { 'id': 19, 'productName': 'Saddle', 'itemCost': 599.99 },
      { 'id': 20, 'productName': 'Riding cap', 'itemCost': 79.99 }
    ]
  },
  {
    'id': 10,
    'customerId': 10,
    'orderItems': [
      { 'id': 21, 'productName': 'Baseball', 'itemCost': 9.99 },
      { 'id': 22, 'productName': 'Bat', 'itemCost': 19.99 }
    ]
  }
];