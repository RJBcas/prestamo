import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserActions } from "src/app/store/actions";
import { User } from "src/app/models/User.models";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  login: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{ user: User }>) {
    this.construirForm();
  }

  ngOnInit(): void {
  }
  construirForm() {
    this.login = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // tslint:disable-next-line: no-unused-expression
    this.login.valid;
  }


  get emailField() {
    return this.login.get('email');
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get passwordField() {
    return this.login.get('password');
  }
  get passwordInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  sesion = (signForm) => {
    this.store.dispatch(UserActions.signIn(signForm));
  };
}
