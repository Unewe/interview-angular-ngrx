import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {userEntityAdapter} from "./user-entity.reducer";

export const selectUsersEntityState = (state: AppState) => {
  return state.userEntityState
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userEntityAdapter.getSelectors();

export const selectUserEntityIds = createSelector(
  selectUsersEntityState,
  selectIds
);

export const selectUserEntities = createSelector(
  selectUsersEntityState,
  selectEntities
);
export const selectAllUsers = createSelector(
  selectUsersEntityState,
  selectAll
);
export const selectUserTotal = createSelector(
  selectUsersEntityState,
  selectTotal
);

export const selectCurrentUser = createSelector(
  selectUsersEntityState,
  (userEntityState) => userEntityState.selectedUserId
);
