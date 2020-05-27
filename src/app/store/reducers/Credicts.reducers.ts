import { createReducer, on } from "@ngrx/store";
import { CreditsActions } from "../actions";
import { Credit } from "../../models/Credict.models";

export const initialState = [];

export const reducer = createReducer(
  initialState,
  on(CreditsActions.storeCredits, (state, { credits }) => credits),
  on(CreditsActions.addCredit, (state, { credit }) => [...state, credit])
);

export function credictsReducer(state, action) {
  return reducer(state, action);
}
