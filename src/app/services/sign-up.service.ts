import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.models';
import { SignUpForm } from "../models/SignUpForm.models";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}
  signUp(signUpForm: SignUpForm): Observable<any> {
    console.log('holaa desde crear cuenta')
    return this.http.post<any>(
      'http://localhost:3000/api/user/createUser',
      signUpForm
    );

  }
}
