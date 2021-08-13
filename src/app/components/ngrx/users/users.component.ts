import {Component, OnDestroy, OnInit} from '@angular/core';
import {selectCurrentUser, selectUsers} from "../../../store/users/user.selectors";
import {NavigationStart, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {createUser, deleteUser, getUsers, selectUser} from "../../../store/users/user.actions";
import {filter, takeUntil} from "rxjs/operators";
import {User} from "../../../models/user";
import {UserState} from "../../../store/users/user.reducer";
import {selectLoader} from "../../../store/root/root.selectors";
import {RootStore} from "../../../store";
import {Subject} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users$ = this.store.select(selectUsers);
  currentUser?: User;
  loading$ = this.rootStore.select(selectLoader);
  destroyNotifier = new Subject();

  constructor(
    private router: Router,
    // UserState.
    private readonly store: Store<UserState>,
    // RootState.
    private readonly rootStore: Store<RootStore>
  ) {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.store.select(selectCurrentUser).pipe(takeUntil(this.destroyNotifier)).subscribe(value => {
      this.currentUser = value
    });

    this.store.dispatch(createUser({user: {age: 44, name: "Fernando"}}));
    this.store.dispatch(createUser({user: {age: 25, name: "Bob"}}));
    this.store.dispatch(createUser({user: {age: 32, name: "Ann"}}));
    this.store.dispatch(createUser({user: {age: 32, name: "Roberto"}}));
    this.store.dispatch(createUser({user: {age: 32, name: "Mary"}}));

    this.router.events
      .pipe(
        takeUntil(this.destroyNotifier),
        filter(event => event instanceof NavigationStart)
      ).subscribe((value) => console.log(value));
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
