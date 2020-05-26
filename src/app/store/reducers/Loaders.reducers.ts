import { createReducer, on } from "@ngrx/store";
import { LoadersActions } from "../actions";
import { Loaders } from "../../models/Loaders.models";

export interface State extends Loaders {}

export const initialState: State = {
  loaders: [],
};

export const reducer = createReducer(
  initialState,
  on(LoadersActions.AddLoader, (state, { loader }) => {
    const newState = { loaders: [...state.loaders, loader] };
    return newState;
  }),
  on(LoadersActions.RemoveLoader, (state, { loader }) => {
    const { loaders } = state;
    const activeLoaders = loaders.filter(
      (activeLoader) => activeLoader !== loader
    );
    return { loaders: activeLoaders };
  })
);

export function loadersReducer(state, action) {
  return reducer(state, action);
}
