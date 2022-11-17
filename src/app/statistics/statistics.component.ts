import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  formulario = {};

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

  registerUser(){
    this.formulario = this.userForm.value;
    console.log(this.formulario);
  }
}
