import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ProductsFacade } from '@npx-dev/products';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'npx-dev-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  allProducts$ = this.facade.allProducts$;
  loaded$ = this.facade.loaded$;
  selectedProducts$ = this.facade.selectedProducts$;

  productsFG = this.fb.group({
    product: new FormArray([])
  })

  productFA = this.productsFG.get('product') as FormArray;

  constructor(private fb: FormBuilder, private facade: ProductsFacade) {
    this.facade.init();
   }

  ngOnInit(): void {
    this.loaded$.pipe(
      tap(() => this.allProducts$.pipe(
        map(
          products => {
            const controls = products.map(product => {
              return new FormControl(product);
            });

            this.productsFG.registerControl('product', new FormArray(controls));
          }
        )
      ))
    ).subscribe(x => console.log(x))
  }



  addProduct() {
    this.productFA.push(this.createProductForm());
  }

  createProductForm() {
    return this.fb.group({
      name: '',
      description: '',
      retailPrice: '',
      quantity: '',
      isImported: '',
      tax: '',
      afterTaxPrice: ''
    })
  }

  // createProductForm() {
  //   return this.fb.array([
  //     new FormControl('name'),
  //     new FormControl('description'),
  //     new FormControl('quantity'),
  //     new FormControl('retailPrice'),
  //     new FormControl('isImported'),
  //     new FormControl('tax'),
  //     new FormControl('afterTaxPrice')
  //   ]);
  // }
}
