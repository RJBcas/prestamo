import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Credit } from "../models/Credict.models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RequestCreditService {
  constructor(private http: HttpClient) {}

  requestCredit(requestForm): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/requestC/solicitar/",
      requestForm
    );
  }

  paidCredit(requestForm): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/pagar/pagar/",
      requestForm
    );
  }
}
