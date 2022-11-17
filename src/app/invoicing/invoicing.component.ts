import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  nombre: string;
  obra: string;
  placa: string;
  material: string;
  cantidad: number;
  valor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nombre: 'Gabriel', obra: 'obra', placa: 'placa', material: 'material', cantidad: 10, valor: 11
  },
  {
    nombre: 'Gabriel', obra: 'obra', placa: 'placa', material: 'material', cantidad: 10, valor: 11
  }
];

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  formulario: any;
  
  userForm: FormGroup<{
    nombre: FormControl<string | null>,
    obra: FormControl<string | null>,
    placa: FormControl<string | null>,
    material: FormControl<string | null>,
    cantidad: FormControl<number | null>,
    valor: FormControl<number | null>
  }>

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: new FormControl('', {validators:[Validators.required]}),
      obra: new FormControl('', {validators:[Validators.required]}),
      placa: new FormControl('', {validators:[Validators.required]}),
      material: new FormControl('', {validators:[Validators.required]}),
      cantidad: new FormControl(0, {validators:[Validators.required]}),
      valor: new FormControl(0, {validators:[Validators.required]}),
    });
   }

  ngOnInit(): void {
  }

  // registerUser(){
  //   this.formulario = this.userForm.value;
  //   ELEMENT_DATA.push(this.formulario);
  // }

  displayedColumns: string[] = ['nombre', 'obra', 'placa', 'material', 'cantidad', 'valor'];
  dataSource = ELEMENT_DATA;
}
