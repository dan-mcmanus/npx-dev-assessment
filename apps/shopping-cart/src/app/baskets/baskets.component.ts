import { Component, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BasketsFacade } from './+state/baskets/baskets.facade';
import { ProductVm } from '../core/model/product.viewmodel';

@Component({
  selector: 'npx-dev-basket',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketsComponent {

  @ViewChild('htmlData') htmlData!: ElementRef;
  payload = '';
  invoice = new Invoice();

  loaded$ = this.basketsFacade.loaded$;
  selectedBasket$ = this.basketsFacade.selectedBaskets$;
  allBaskets$ = this.basketsFacade.allBaskets$;


  onSubmit() {
    this.payload = ''
  }

  constructor(private basketsFacade: BasketsFacade) {
    this.basketsFacade.init();
  }



  public openPDF(action?: string): void {
    const DATA: unknown = document.getElementById('htmlData');

    html2canvas(DATA as never).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save(`invoice-${new Date().toISOString()}.pdf`);
    });
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
