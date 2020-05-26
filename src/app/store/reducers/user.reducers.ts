import { createReducer, on } from "@ngrx/store";
import { UserActions } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";

import { User } from "../../models/User.models";

export interface State {
  error?: HttpErrorResponse;
  isLoading: boolean;
  loggedIn: boolean;
  user: User;
}

export const initialState: State = {
  isLoading: false,
  loggedIn: false,
  user: {
    ci: "",
    name: "",
    email: "",
    admin: false,
    credits: [],
  },
};

export const reducer = createReducer(
  initialState,
  on(UserActions.signInLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(UserActions.storeUser, (state, user) => ({
    ...state,
    loggedIn: true,
    user,
  })),
  on(UserActions.SignInError, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function userReducer(state, action) {
  return reducer(state, action);
}
