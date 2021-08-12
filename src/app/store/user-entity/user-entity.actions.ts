import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";
import {EntityMap, EntityMapOne, Predicate, Update} from "@ngrx/entity";

//Entity actions
export const loadUsers = createAction('[USER_ENTITY] Load Users', props<{ users: User[] }>());
export const setUsers = createAction('[USER_ENTITY] Set Users', props<{ users: User[] }>());
export const addUser = createAction('[USER_ENTITY] Add User', props<{ user: User }>());
export const setUser = createAction('[USER_ENTITY] Set User', props<{ user: User }>());
export const upsertUser = createAction('[USER_ENTITY] Upsert User', props<{ user: User }>());
export const addUsers = createAction('[USER_ENTITY] Add Users', props<{ users: User[] }>());
export const upsertUsers = createAction('[USER_ENTITY] Upsert Users', props<{ users: User[] }>());
export const updateUser = createAction('[USER_ENTITY] Update User', props<{ update: Update<User> }>());
export const updateUsers = createAction('[USER_ENTITY] Update Users', props<{ updates: Update<User>[] }>());
export const mapUser = createAction('[USER_ENTITY] Map User', props<{ entityMap: EntityMapOne<User> }>());
export const mapUsers = createAction('[USER_ENTITY] Map Users', props<{ entityMap: EntityMap<User> }>());
export const deleteUser = createAction('[USER_ENTITY] Delete User', props<{ id: number }>());
export const deleteUsers = createAction('[USER_ENTITY] Delete Users', props<{ ids: number[] }>());
export const deleteUsersByPredicate = createAction('[User/API] Delete Users By Predicate', props<{ predicate: Predicate<User> }>());
export const clearUsers = createAction('[USER_ENTITY] Clear Users');

//Additional actions
export const selectUser = createAction('[USER_ENTITY] Select User', props<{ id: number }>());

export const loadUserEntitiesEffect = createAction('[USER_ENTITY] Load User Effect');
