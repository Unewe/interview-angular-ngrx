import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {
  selectAllUsers,
  selectCurrentUser,
  selectUserEntities,
  selectUserEntityIds
} from "../../../store/user-entity/user-entity.selectors";
import {loadUserEntitiesEffect} from "../../../store/user-entity/user-entity.actions";
import {deleteUser, selectUser} from "../../../store/user-entity/user-entity.actions";

@Component({
  selector: 'app-user-entity',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.scss']
})
export class UserEntityComponent implements OnInit {

  users$ = this.store.select(selectAllUsers);
  currentUserId?: number;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUserEntityIds).subscribe(value => console.log(value));
    this.store.select(selectCurrentUser).subscribe(value => this.currentUserId = value);
    this.store.dispatch(loadUserEntitiesEffect());
  }

  delete(id: number) {
    this.store.dispatch(deleteUser({id}));
  }

  selectUser(id: number) {
    this.store.dispatch(selectUser({id}));
  }

  getUsers() {
    this.store.dispatch(loadUserEntitiesEffect());
  }
}
