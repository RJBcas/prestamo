import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, mergeMap, catchError, map } from "rxjs/operators";
import { SignInService } from "../../services/sign-in.services";

import { UserActions } from "../actions";

@Injectable()
export class SignInEffect {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.signIn),
      mergeMap((signInForm) => [
        UserActions.signInLoading({
          isLoading: true,
        }),
        UserActions.SignInPostForm(signInForm),
      ])
    )
  );

  PosSignInForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.SignInPostForm),
      mergeMap((signInForm) =>
        this.signInService.signIn(signInForm).pipe(
          switchMap((user) => [
            UserActions.signInLoading({
              isLoading: false,
            }),
            UserActions.storeUser(user),
          ]),
          catchError(({ status, statusText }) =>
            of(UserActions.SignInError({ status, statusText }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private signInService: SignInService
  ) {}
}
