import { Component, OnInit } from "@angular/core";
// import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
// import { UserActions } from "src/app/store/actions";
import { User } from "src/app/models/User.models";
import { Router } from "@angular/router";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { SignInService } from 'src/app/services/sign-in.services';
import { ComunesService } from '../../../services/comunes.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  // user$: Observable<User>;
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private singIn: SignInService,
    private comun: ComunesService
  ) {
    this.construirForm();
    // this.user$ = store.pipe(select("user"));

    // this.user$.subscribe((user) => {
    //   if (user.loggedIn) {
    //     this.router.navigate(["requestC"]);
    //   }
    // });
  }

  ngOnInit(): void {}
  construirForm() {
    this.login = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      passaword: ["", Validators.required],
    });
    // tslint:disable-next-line: no-unused-expression
    this.login.valid;
  }

  get emailField() {
    return this.login.get("email");
  }

  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get passwordField() {
    return this.login.get("passaword");
  }
  get passwordInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  sesion = (signForm) => {
    this.singIn.signIn(signForm).subscribe( res => {
      if(res.loggedIn){
        this.comun.setUser(res.user);
        this.comun.setLoggin(res.loggedIn);
        this.router.navigate(['/requestC']);
      }else {
        alert('Usuario o contraseña Incorrecta');
      }

    })
    // this.store.dispatch(UserActions.signIn(signForm));
  };
}
