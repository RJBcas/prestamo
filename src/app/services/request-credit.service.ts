import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credit } from '../models/User.models';
import { RequestCredit } from "../models/User.models";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestCreditService {

  constructor(private http: HttpClient) {}

  requestCredit(requestForm: RequestCredit): Observable<Credit> {
    return this.http.get<Credit>(
      'http://www.mocky.io/v2/5ecc79a5320000760023615d'
    );
  }
}


