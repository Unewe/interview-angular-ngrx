import {UserState} from "./users/user.reducer";
import {UserEntityState} from "./user-entity/user-entity.reducer";

export interface AppState {
  usersState: UserState;
  userEntityState: UserEntityState;
}
