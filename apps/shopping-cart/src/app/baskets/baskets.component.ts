import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'npx-dev-basket',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketsComponent {

  @ViewChild('htmlData') htmlData!:ElementRef;

  invoice = new Invoice();

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];


  public generatePDF(action = 'open') {
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

  public openPDF():void {
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

  addProduct(){
    this.invoice.products.push(new Product());
  }

}



class Product {
  name = '';
  price = 0;
  qty = 1;
}

class Invoice {
  customerName = '';
  address = '';
  contactNo?: number;
  email = '';

  products: Product[] = [];
  additionalDetails = '';

  constructor() {
    // Initially one empty product row we will show
    this.products.push(new Product());
  }
}
