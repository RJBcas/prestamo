import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { ServicesService } from '../../../services/services.service';
import { ComunesService } from '../../../services/comunes.service';
import { RequestCreditService } from 'src/app/services/request-credit.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-credit',
  templateUrl: './pay-credit.component.html',
  styleUrls: ['./pay-credit.component.css']
})
export class PayCreditComponent implements OnInit {

  saldoNegativo: number;
  payForm: FormGroup;
  id: string;
constructor( private fb: FormBuilder,
             public servicio: ServicesService,
             private comun: ComunesService,
             private paid: RequestCreditService,
             private router: Router
  ) {
    this.comun.isUser.subscribe( res => {
      this.saldoNegativo =  res.credits[res.credits.length -1].saldo
    })


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

  if(this.servicio.desenmascararMontoPesos(this.mountField.value) > this.saldoNegativo){
    this.mountField.setValue(this.saldoNegativo);
    return false;
  } else {
    return true;
  }


    return  this.mountField.touched && this.mountField.invalid;
  }
  cancelar = () => {
    this.construirForm();
  }
  pagar = (data) => {
    console.log(data);
    this.comun.isUser.subscribe( res => {
this.id = res._id;
    })
    const dataPaid = {
      id : this.id,
      mount :this.servicio.desenmascararMontoPesos(this.mountField.value)
    }

    console.log(dataPaid);
    this.paid.paidCredit(dataPaid).subscribe( res => {
      console.log(res)
      if(res.status === 200){
        this.comun.setUser(res.users);
        this.router.navigate(['/history']);

      } else {
        alert('Ups hubo un problema con su pago');
      }
    })
  }
}
