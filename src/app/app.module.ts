import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {JsQuestionsComponent} from './pages/js-questions/js-questions.component';
import {RxjsQuestionsComponent} from './pages/rxjs-questions/rxjs-questions.component';
import {NgrxQuestionsComponent} from './pages/ngrx-questions/ngrx-questions.component';
import {StoreModule} from "@ngrx/store";
import * as fromUser from "./store/users/user.reducer"
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { UsersComponent } from './components/ngrx/users/users.component';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/users/user.effects";
import * as fromUserEntity from "./store/user-entity/user-entity.reducer";
import {UserEntityEffects} from "./store/user-entity/user-entity.effects";
import { UserEntityComponent } from './components/ngrx/user-entity/user-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsQuestionsComponent,
    RxjsQuestionsComponent,
    NgrxQuestionsComponent,
    UsersComponent,
    UserEntityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({usersState: fromUser.userReducer, userEntityState: fromUserEntity.userEntityReducer}),
    EffectsModule.forRoot([UserEffects, UserEntityEffects]),
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
