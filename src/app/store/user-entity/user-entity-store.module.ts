import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {UserEntityEffects} from "./user-entity.effects";
import * as fromUserEntity from "./user-entity.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("userEntityState", fromUserEntity.userEntityReducer),
    EffectsModule.forFeature([UserEntityEffects]),
  ],
  providers: []
})
export class UserEntityStoreModule { }
