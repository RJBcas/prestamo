import { createReducer, on } from "@ngrx/store";
import { RequestActions } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";
import { RequestCredit } from "../../models/Credict.models";

export interface State {
  error?: HttpErrorResponse;
  isLoading: boolean;
  requestCredit: RequestCredit;
}

export const initialState: State = {
  isLoading: false,
  requestCredit: {
    ci: "",
    mount: 0,
    expiresIn: new Date(),
  },
};

export const reducer = createReducer(
  initialState,
  on(RequestActions.requestOnCharge, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(RequestActions.storeRequestCredit, (state, requestCredit) => ({
    ...state,
    requestCredit,
  })),
  on(RequestActions.requestError, (state, error) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function requestCreatReducer(state, action) {
  return reducer(state, action);
}
