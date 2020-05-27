import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs";
// import { Store, select } from "@ngrx/store";
// import { SignUpActions } from "src/app/store/actions";
// import * as fromUser from "src/app/store/reducers/user.reducers";
import { Router } from "@angular/router";
import { SignInService } from 'src/app/services/sign-in.services';
import { SignUpService } from '../../../services/sign-up.service';
import { ComunesService } from '../../../services/comunes.service';

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"],
})
export class CreateAccountComponent {
  hide = true;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sigUp: SignUpService,
    private comun: ComunesService
  ) {
    this.construirForm();
  }
  construirForm() {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required]],
      ci: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      passaword: ["", Validators.required],
    });
  }
  get emailField() {
    return this.contactForm.get("email");
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get ciField() {
    return this.contactForm.get("ci");
  }
  get ciInvalid() {
    return this.ciField.touched && this.ciField.invalid;
  }

  get nameField() {
    return this.contactForm.get("name");
  }
  get nameInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get passwordField() {
    return this.contactForm.get("passaword");
  }
  get passwordInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  registry = (signUpForm) => {
this.sigUp.signUp(signUpForm).subscribe( res => {
  if(res.status === 400){
    alert('Usuario ya existente CC');
    this.router.navigate(['/login'])
  } else {
  this.comun.setUser(res.newUser)
  console.log(res.newUser)
    this.comun.setLoggin(true);

    this.router.navigate(['/requestC'])

  }
})

  };
}
