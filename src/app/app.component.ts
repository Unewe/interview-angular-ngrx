import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {RootStore} from "./store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  storeSubscription?: Subscription;

  constructor(
    private readonly store: Store<RootStore>
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(value => console.log("STORE_CHANGED", value));
  }

  ngOnDestroy(): void {
    this.storeSubscription?.unsubscribe();
  }
}
