import {UserState} from "./users/user.reducer";
import {UserEntityState} from "./user-entity/user-entity.reducer";

export interface RootStore {
  userState: UserState,
  userEntityState: UserEntityState
}
