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
  signIn(signInForm: SignInForm): Observable<User> {
    return this.http.get<User>(
      "http://www.mocky.io/v2/5ecb64d03000004e00ddd5c2"
    );
  }
}
