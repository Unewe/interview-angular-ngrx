import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {JsQuestionsComponent} from "./components/js-questions/js-questions.component";
import {RxjsQuestionsComponent} from "./components/rxjs-questions/rxjs-questions.component";
import {NgrxQuestionsComponent} from "./components/ngrx-questions/ngrx-questions.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full',  },
  { path: 'js', component: JsQuestionsComponent },
  { path: 'rxjs', component: RxjsQuestionsComponent },
  { path: 'ngrx', component: NgrxQuestionsComponent },
  { path: '**',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
