import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {delay} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getUsers() {
    const users: Array<User> = [
      {age: 20, name: "Michael"},
      {age: 51, name: "Bred"},
      {age: 31, name: "Lucy"}
    ];
    return of(users).pipe(delay(2000));
  }
}
