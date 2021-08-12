import {User} from "../../models/user";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from "./user-entity.actions";

export interface UserEntityState extends EntityState<User> {
  // additional entity state properties
  selectedUserId?: number;
}

export const userEntityAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUserEntityState: UserEntityState = userEntityAdapter.getInitialState({
  // additional entity state properties
  selectedUserId: undefined
});

export const userEntityReducer = createReducer(
  initialUserEntityState,

  on(UserActions.addUser, (state, { user }) => {
    return userEntityAdapter.addOne(user, state)
  }),
  on(UserActions.setUser, (state, { user }) => {
    return userEntityAdapter.setOne(user, state)
  }),
  on(UserActions.upsertUser, (state, { user }) => {
    return userEntityAdapter.upsertOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    const withIds = users.map((user, index) => ({...user, id: state.ids.length + index + 1}));
    return userEntityAdapter.addMany(withIds, state);
  }),
  on(UserActions.upsertUsers, (state, { users }) => {
    return userEntityAdapter.upsertMany(users, state);
  }),
  on(UserActions.updateUser, (state, { update }) => {
    return userEntityAdapter.updateOne(update, state);
  }),
  on(UserActions.updateUsers, (state, { updates }) => {
    return userEntityAdapter.updateMany(updates, state);
  }),
  on(UserActions.mapUser, (state, { entityMap }) => {
    return userEntityAdapter.mapOne(entityMap, state);
  }),
  on(UserActions.mapUsers, (state, { entityMap }) => {
    return userEntityAdapter.map(entityMap, state);
  }),
  on(UserActions.deleteUser, (state, { id }) => {
    return userEntityAdapter.removeOne(id, state);
  }),
  on(UserActions.deleteUsers, (state, { ids }) => {
    return userEntityAdapter.removeMany(ids, state);
  }),
  on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
    return userEntityAdapter.removeMany(predicate, state);
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return userEntityAdapter.setAll(users, state);
  }),
  on(UserActions.setUsers, (state, { users }) => {
    return userEntityAdapter.setMany(users, state);
  }),
  on(UserActions.clearUsers, state => {
    return userEntityAdapter.removeAll({ ...state, selectedUserId: undefined});
  }),
  on(UserActions.selectUser, (state, { id }) => {
    return { ...state, selectedUserId: id };
  }),
)
