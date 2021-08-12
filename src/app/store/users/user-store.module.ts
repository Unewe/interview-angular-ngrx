import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromUser from "./user.reducer";
import {UserEffects} from "./user.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("userState", fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: []
})
export class UserStoreModule { }
