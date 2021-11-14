import { Component, ChangeDetectionStrategy, ElementRef, ViewChild, OnInit, LOCALE_ID } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BasketsFacade } from './+state/baskets/baskets.facade';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { groupBy, map, tap } from 'rxjs/operators';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'npx-dev-basket',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketsComponent {

  @ViewChild('htmlData') htmlData!: ElementRef;

  // invoiceForm = this.fb.group({
  //   id: [''],
  //   basketName: [''],
  //   transactionFinalized: [''],
  //   selectedProducts: this.fb.group({
  //     price: '',
  //     taxes: '',
  //     quantity: ''
  //   })
  // });


  payload = '';
  invoice = new Invoice();
  selectedProducts: any;
  loaded$ = this.basketsFacade.loaded$;
  selectedBasket$ = this.basketsFacade.selectedBaskets$;
  allBaskets$ = this.basketsFacade.allBaskets$;

  onSubmit() {
    this.payload = ''
  }

  constructor(private basketsFacade: BasketsFacade, private fb: FormBuilder) {
    this.basketsFacade.init();
  }



  // public generatePDF(action = 'open') {
  //   const DATA: unknown = document.getElementById('htmlData');

  //   html2canvas(DATA as never).then(canvas => {

  //       const fileWidth = 208;
  //       const fileHeight = canvas.height * fileWidth / canvas.width;

  //       const FILEURI = canvas.toDataURL('image/png')
  //       const PDF = new jsPDF('p', 'mm', 'a4');
  //       const position = 0;
  //       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

  //       PDF.save('angular-demo.pdf');
  //   });

  // }

  public openPDF(action?: string): void {
    const DATA: unknown = document.getElementById('htmlData');

    html2canvas(DATA as never).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('angular-demo.pdf');
    });
  }

  addProduct(product) {
    this.invoice.products.push(
      product.id,
      product.name,
      product.retailPrice,
      product.isImport,
      product.hasBasicTaxExclusion,
      product.quantity,
      product.priceWithTax,
      product.basketId
    );
  }

}



class ProductVm {
  id: string | number; // Primary ID
  name: string;
  retailPrice: number;
  isImport: boolean;
  hasBasicTaxExclusion: boolean;
  quantity = 1;
  priceWithTax?: number;
  basketId?: number;


  constructor(id: number,// Primary ID
    name: string,
    retailPrice: number,
    isImport: boolean,
    hasBasicTaxExclusion: boolean,
    quantity: number,
    priceWithTax?: number,
    basketId?: number) {

    this.id = id;
    this.name = name;
    this.isImport = isImport;
    this.hasBasicTaxExclusion = hasBasicTaxExclusion;
    this.quantity = quantity;
    this.priceWithTax = priceWithTax;
    this.basketId = basketId;
  }


}


class Invoice {

  products: ProductVm[] = [];
  totalRetailPrice: number;
  totalWithTax: number;
  constructor() {
    // Initially one empty product row we will show

  }
}
