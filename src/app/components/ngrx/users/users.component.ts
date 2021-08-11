import { Component, OnInit } from '@angular/core';
import {selectCurrentUser, selectUsers} from "../../../store/users/user.selectors";
import {NavigationStart, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {UserState} from "../../../store/users/user.reducer";
import {createUser, deleteUser, getUsers, selectUser} from "../../../store/users/user.actions";
import {filter} from "rxjs/operators";
import {User} from "../../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this.store.select(selectUsers);
  currentUser?: User;

  constructor(
    private router: Router,
    private readonly store: Store<{usersState: UserState}>
  ) {}

  ngOnInit() {
    this.store.select(selectCurrentUser).subscribe(value => {
      this.currentUser = value
    });

    this.store.dispatch(createUser({age: 44, name: "Fernando"}));
    this.store.dispatch(createUser({age: 25, name: "Bob"}));
    this.store.dispatch(createUser({age: 32, name: "Ann"}));
    this.store.dispatch(createUser({age: 32, name: "Roberto"}));
    this.store.dispatch(createUser({age: 32, name: "Mary"}));


    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((value) => console.log(value));
  }

  delete() {
    this.store.dispatch(deleteUser());
  }

  selectUser(id: number) {
    this.store.dispatch(selectUser({id}));
  }

  getUsers() {
    this.store.dispatch(getUsers());
  }
}
