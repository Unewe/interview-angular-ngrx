import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

//ReducerActions
export const createUser = createAction('[USERS] Create', props<User>());
export const updateUser = createAction('[USERS] Update', props<User>());
export const deleteUser = createAction('[USERS] Delete');
export const selectUser = createAction('[USERS] Select', props<{id: number}>());
export const addAllUser = createAction('[USERS] Add All', props<{users: Array<User>}>());

//EffectActions
export const getUsers = createAction('[USERS] Get');
