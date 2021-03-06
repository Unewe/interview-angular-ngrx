import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {JsQuestionsComponent} from './pages/js-questions/js-questions.component';
import {RxjsQuestionsComponent} from './pages/rxjs-questions/rxjs-questions.component';
import {NgrxQuestionsComponent} from './pages/ngrx-questions/ngrx-questions.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { UsersComponent } from './components/ngrx/users/users.component';
import {CommonModule} from '@angular/common';
import { UserEntityComponent } from './components/ngrx/user-entity/user-entity.component';
import {UserStoreModule} from "./store/users/user-store.module";
import {UserEntityStoreModule} from "./store/user-entity/user-entity-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromRoot from "./store/root/root.reducer";
import {RootEffects} from "./store/root/root.effects";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsQuestionsComponent,
    RxjsQuestionsComponent,
    NgrxQuestionsComponent,
    UsersComponent,
    UserEntityComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({rootState: fromRoot.rootReducer}),
    EffectsModule.forRoot([RootEffects]),
    UserStoreModule,
    UserEntityStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
