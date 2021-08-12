import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {UsersService} from "../../services/users.service";
import {addUsers, loadUserEntitiesEffect} from "./user-entity.actions";

@Injectable()
export class UserEntityEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserEntitiesEffect),
    mergeMap(() => this.usersService.getUsers()
      .pipe(
        map(users => addUsers({users})),
        catchError(err => of(addUsers({users: []}))),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
