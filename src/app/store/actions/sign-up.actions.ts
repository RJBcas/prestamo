import { createAction, props } from "@ngrx/store";
import { SignUpForm } from "../../models/SignUpForm.models";
import { User } from "../../models/User.models";

export const signUp = createAction("[signUp] SIGN UP", props<SignUpForm>());
export const signUpLoading = createAction(
  "[signUp] TOGGLE SIGN UP LOADER",
  props<{ isLoading: boolean }>()
);
export const postSignUpForm = createAction("[signUp] POST DATA");

export const signUpError = createAction("[signUp] SIGN UP Error", props<any>());
