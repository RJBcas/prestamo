import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';


import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RequestActions } from "src/app/store/actions";
import { RequestCredit } from "src/app/models/User.models";


import { ServicesService } from '../../../services/services.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
const moment = _moment;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class RequestComponent implements OnInit {

  hide = true;
  requestForm: FormGroup;
  minDate: Date;
mount: number;
  mountMin: number;
  mountMax: number;
  interval: number;
constructor( private fb: FormBuilder,
             public servicio: ServicesService,
             private store: Store<{ user: RequestCredit }>
  ) {

    this.mountMin = 10000;
    this.mountMax = 100000;
    this.interval = 10000;
    this.minDate = new Date();

    this.construirForm();

}

  ngOnInit(): void {
  }
  construirForm() {
    this.requestForm = this.fb.group({
      date:  [moment(new Date())],
    });
  }


  cancelar = () => {
    this.construirForm();
  }

  solicitar = (data) => {
    const dataRequest = {
    mount: this.mount,
    expiresIn: new Date( moment(data.date._i).format('YYYY-MM-DD')),
    ci:''
    }

    this.store.dispatch(RequestActions.requestOn(dataRequest))
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  cambiarValorSlider($event) {

    return $event.value;
  }
}
