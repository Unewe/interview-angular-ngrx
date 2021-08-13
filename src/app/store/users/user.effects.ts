import {Injectable} from "@angular/core";
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {UsersService} from "../../services/users.service";
import {catchError, concatMap, map} from "rxjs/operators";
import {addAllUser, getUsers} from "./user.actions";
import {concat, of} from "rxjs";
import {endLoader, startLoader} from "../root/root.actions";

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    // Переключаемся на конкат. Конкат выполняет потоки последовательно один за другим.
    concatMap(() => concat(
      of(startLoader()),
      this.usersService.getUsers()
        .pipe(
          map(users => addAllUser({users})),
          catchError(err => of(addAllUser({users: []}))),
        ),
      of(endLoader())
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
