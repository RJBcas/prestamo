import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User.models";
import { SignInForm } from "../models/SignInForm.models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SignInService {
  constructor(private http: HttpClient) {}
  signIn(signInForm: SignInForm): Observable<any> {
    return this.http.post<any>(
      "http://localhost:3000/api/user/sigin",
      signInForm
    );
  }
}
