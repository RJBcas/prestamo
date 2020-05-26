import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Store } from "@ngrx/store";
import { SignUpActions } from "src/app/store/actions";
import { User } from "src/app/models/User.models";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent  {
  hide = true;
  contactForm: FormGroup;
constructor( private fb: FormBuilder, private store: Store<{ user: User }>) {
this.construirForm();
}
construirForm() {
  this.contactForm = this.fb.group({
    name : ['', [Validators.required]],
    ci : ['', [Validators.required]],
    email : ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}
get emailField() {
  return this.contactForm.get('email');
}

get emailFieldIsInvalid() {
  return this.emailField.touched && this.emailField.invalid;
}

get ciField() {
  return this.contactForm.get('ci');
}
get ciInvalid() {
  return this.ciField.touched && this.ciField.invalid;
}

get nameField() {
  return this.contactForm.get('name');
}
get nameInvalid() {
  return this.nameField.touched && this.nameField.invalid;
}

get passwordField() {
  return this.contactForm.get('password');
}
get passwordInvalid() {
  return this.passwordField.touched && this.passwordField.invalid;
}

registry = (signUpForm) =>{
  this.store.dispatch(SignUpActions.signUp(signUpForm));
};
}
