import {createSelector} from "@ngrx/store";
import {RootStore} from "../index";

export const selectLoader = createSelector(
  (state: RootStore) => state.rootState,
  (state) => {
    return state.loader
  }
);
