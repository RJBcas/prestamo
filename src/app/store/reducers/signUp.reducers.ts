import { createReducer, on } from "@ngrx/store";
import { SignUpActions } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";

export interface State {
  error?: HttpErrorResponse;
  isLoading: boolean;
}

export const initialState = {
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(SignUpActions.signUp, (state) => state),
  on(SignUpActions.signUpLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(SignUpActions.signUpError, (state, error) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function signUpReducer(state, action) {
  return reducer(state, action);
}
