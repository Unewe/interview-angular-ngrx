import {Injectable} from "@angular/core";
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {UsersService} from "../../services/users.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {addAllUser, getUsers} from "./user.actions";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => addAllUser({users})),
        catchError(err => of(addAllUser({users: []}))),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
