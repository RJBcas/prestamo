import { createAction, props } from "@ngrx/store";

import { RequestCredit, Credit } from "../../models/Credict.models";

export const requestOn = createAction(
  "[REQUEST CREDIT] SOLICT CREDIT",
  props<RequestCredit>()
);

export const requestOnCharge = createAction(
  "[REQUEST CREDIT] TOGGLE SOLICT CREDIT",
  props<{ isLoading: boolean }>()
);

export const requestInLoading = createAction(
  "[REQUEST CREDIT] POST DATA",
  props<RequestCredit>()
);

export const storeRequestCredit = createAction(
  "[REQUEST CREDIT] REQUEST CREDIT SUCCESSFULLY",
  props<any>()
);
export const requestError = createAction(
  "[REQUEST CREDIT] SIGN UP Error",
  props<any>()
);
