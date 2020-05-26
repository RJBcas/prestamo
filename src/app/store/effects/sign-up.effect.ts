import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, mergeMap, catchError, map } from "rxjs/operators";
import { SignUpService } from "../../services/sign-up.service";

import { SignUpActions, UserActions } from "../actions";

@Injectable()
export class SignUpEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUp),
      mergeMap((signUpForm) => [
        SignUpActions.signUpLoading({
          isLoading: true,
        }),
        SignUpActions.postSignUpForm(),
      ])
    )
  );

  postSignUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUp),
      mergeMap((signUpForm) =>
        this.signUpService.signUp(signUpForm).pipe(
          switchMap((user) => [
            SignUpActions.signUpLoading({
              isLoading: false,
            }),
            UserActions.storeUser(user),
          ]),
          catchError(({ status, statusText }) =>
            of(SignUpActions.signUpError({ status, statusText }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private signUpService: SignUpService
  ) {}
}
