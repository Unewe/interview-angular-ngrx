import {createFeatureSelector, createSelector} from "@ngrx/store";
import {userEntityAdapter, UserEntityState} from "./user-entity.reducer";

const getUserEntityState = createFeatureSelector<UserEntityState>('userEntityState');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = userEntityAdapter.getSelectors();

export const selectUserEntityIds = createSelector(
  getUserEntityState,
  selectIds
);

export const selectUserEntities = createSelector(
  getUserEntityState,
  selectEntities
);
export const selectAllUsers = createSelector(
  getUserEntityState,
  selectAll
);
export const selectUserTotal = createSelector(
  getUserEntityState,
  selectTotal
);

export const selectCurrentUser = createSelector(
  getUserEntityState,
  (userEntityState) => userEntityState.selectedUserId
);
