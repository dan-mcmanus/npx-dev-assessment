import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculateTaxPipe } from './pipes/calculate-tax.pipe';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CalculateTaxPipe],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule, CalculateTaxPipe]
})
export class SharedModule { }

