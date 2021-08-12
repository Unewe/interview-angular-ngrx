import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";

const selectState = (state: AppState) => {
  return state.usersState
}

export const selectUsers = createSelector(
  selectState,
  (usersState) => usersState.users
);

export const selectCurrentUser = createSelector(
  selectState,
  (usersState) => usersState.currentUser
);
