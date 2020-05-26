import { createAction, props } from "@ngrx/store";
import { User } from "../../models/User.models";
import { SignInForm } from "../../models/SignInForm.models";

export const signIn = createAction(
  "[USER] USER TRY TO SIGNIN",
  props<SignInForm>()
);

export const signInLoading = createAction(
  "[USER] TOGGLE LOGIN LOADER",
  props<{ isLoading: boolean }>()
);

export const SignInPostForm = createAction(
  "[USER] POST DATA",
  props<SignInForm>()
);

export const storeUser = createAction(
  "[USER] SIGN IN SUCCESSFULLY",
  props<User>()
);

export const SignInError = createAction("[USER] SIGN IN ERROR", props<any>());
