import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {UsersService} from "../../services/users.service";

@Injectable()
export class RootEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
