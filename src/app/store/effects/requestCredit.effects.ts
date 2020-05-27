import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, mergeMap, catchError, map } from "rxjs/operators";
import { RequestCreditService } from "../../services/request-credit.service";
import { RequestActions, CreditsActions } from "../actions";

@Injectable()
export class RequestCreditEffects {
  requestOn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestActions.requestOn),
      mergeMap((requestForm) => [
        RequestActions.requestOnCharge({
          isLoading: true,
        }),
        RequestActions.requestInLoading(requestForm),
      ])
    )
  );

  postRequestCreditForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestActions.requestInLoading),
      mergeMap((requestForm) =>
        this.RequestCreditService.requestCredit(requestForm).pipe(
          switchMap((requestCredit) => [
            RequestActions.requestOnCharge({
              isLoading: false,
            }),
            RequestActions.storeRequestCredit(requestCredit),
            CreditsActions.addCredit({ credit: requestCredit }),
          ]),
          catchError(({ status, statusText }) =>
            of(RequestActions.requestError({ status, statusText }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private RequestCreditService: RequestCreditService
  ) {}
}
