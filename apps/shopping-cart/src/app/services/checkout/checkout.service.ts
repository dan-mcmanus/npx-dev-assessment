
import { Injectable } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';
import { ProductVm } from '../../core/model/product.viewmodel';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
/*
1. Basic sales tax is applicable at a rate of 10% on all goods, except candy, popcorn and
coffee, which are exempt.
2. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%,
with no exemptions.
3. When items are purchased a receipt is produced which lists the name of all the items
and their price (including tax), finishing with the total cost of the items, and the total
amounts of sales taxes paid.
4. Sales tax is rounded up to the nearest multiple of $0.05. This rounding is done by item,
by type of tax (basic sales and import duty)
5. Write an application that persists or prints out the receipt details for these shopping
baskets.
*/



}
