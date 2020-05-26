import { ActionReducer, MetaReducer } from "@ngrx/store";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    const { type, ...payload } = action;
    console.log(type);
    console.log(payload);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

/* 
import { combineReducers, Action, MetaReducer } from "@ngrx/store";
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromLoaders from "./loaders.reducers";
import * as fromSignUp from "./signUp.reducers";

export interface SharedState {
  loaders: fromLoaders.State;
  fromSignUp: fromSignUp.State;
}

export function reducers(state: any, action: Action) {
  return combineReducers({
    loaders: fromLoaders.reducer,
    signUp: fromSignUp.reducer,
  })(state, action);
}


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug];



export {};
 */
