import {createReducer, on} from "@ngrx/store";
import * as RootActions from "./root.actions";

export type RootState = {
  loader: boolean;
}
export const initialRootState: RootState = {
  loader: false,
}

export const rootReducer = createReducer(
  initialRootState,

  on(RootActions.startLoader, (state) => ({...state, loader: true})),
  on(RootActions.endLoader, (state) => ({...state, loader: false})),
);
