import {User} from "../../models/user";
import {createReducer, on} from "@ngrx/store";
import * as UserActions from "./user.actions";

export interface UserState {
  users: ReadonlyArray<User>;
  currentUser?: User
}

export const initialUserState: UserState = {
  users: new Array<User>(),
  currentUser: undefined
}

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.createUser, (state, { user }) => {
    return {...state, users: [...state.users, {...user, id: state.users.length + 1}]};
  }),
  on(UserActions.updateUser, (state, { user }) => {
    const users = [...state.users];
    const targetUser = users.find(value => value.id === user.id);

    if (targetUser) {
      targetUser.name = user.name;
      targetUser.age = user.age;
    }

    return {...state, users};
  }),
  on(UserActions.deleteUser, (state) => {
    const users = [...state.users];
    const targetUser = users.find(value => value.id === state.currentUser?.id ?? -1);

    if (targetUser) {
      users.splice(users.indexOf(targetUser), 1);
    }

    return {...state, users};
  }),
  on(UserActions.selectUser, (state, {id}) => {
    const users = [...state.users];
    const currentUser = users.find(value => value.id === id);
    return {...state, currentUser};
  }),
  on(UserActions.addAllUser, (state, payload) => {
    const users = payload.users.map((value, index) => ({...value, id: state.users.length + index + 1}));
    return {...state, users: [...state.users, ...users]};
  })
);
