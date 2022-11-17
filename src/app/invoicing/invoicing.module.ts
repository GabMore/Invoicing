import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoicingComponent
  ],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    InvoicingComponent
  ]
})
export class InvoicingModule { }
