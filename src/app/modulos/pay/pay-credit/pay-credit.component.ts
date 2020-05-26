import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {

  saldoNegativo: number;
  payForm: FormGroup;
constructor( private fb: FormBuilder,
             public servicio: ServicesService
  ) {
this.saldoNegativo = 20000;

this.construirForm();

}
  ngOnInit(): void {
  }

  construirForm() {
    this.payForm = this.fb.group({
      mount : ['', [Validators.required]],

    });
  }

  get mountField() {
    return this.payForm.get('mount');
  }
  get mountInvalid() {
    return this.mountField.touched && this.mountField.invalid;
  }
  cancelar = () => {
    this.construirForm();
  }
  pagar = (data) => {
console.log(data);
  }
}
