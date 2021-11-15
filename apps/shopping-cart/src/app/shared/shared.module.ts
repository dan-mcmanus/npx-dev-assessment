import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from '../services/checkout/checkout.service';
import { TaxCalculationServicexxx } from './tax-calculation.service';
import { InvoiceService } from '../services/invoice/invoice.service';
import { CalculateTaxPipe } from '../pipes/calculate-tax.pipe';



@NgModule({
  declarations: [],
  providers: [CheckoutService, TaxCalculationServicexxx, InvoiceService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule]
})
export class SharedModule { }

