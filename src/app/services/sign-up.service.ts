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
  signUp(signUpForm: SignUpForm): Observable<User> {
    return this.http.get<User>(
      'http://www.mocky.io/v2/5ecb64d03000004e00ddd5c2'
    );
  }
}
