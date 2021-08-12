import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.reducer";

const getUserState = createFeatureSelector<UserState>('userState');

export const selectUsers = createSelector(
  getUserState,
  (usersState) => {
    return usersState.users
  }
);

export const selectCurrentUser = createSelector(
  getUserState,
  (usersState) => usersState.currentUser
);
