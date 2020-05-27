import { createAction, props } from "@ngrx/store";
import { Credit } from "../../models/Credict.models";

export const storeCredits = createAction(
  "[Credit] STORE CREDICTS",
  props<{ credits: Credit[] }>()
);

export const addCredit = createAction(
  "[Credit] ADD CREDIT",
  props<{ credit: Credit }>()
);
