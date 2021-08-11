import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";

export const selectUsers = createSelector(
  (state: AppState) => {
    return state.usersState.users
  },
  (users) => users
);

export const selectCurrentUser = createSelector(
  (state: AppState) => {
    return state.usersState.currentUser
  },
  (user) => user
);
