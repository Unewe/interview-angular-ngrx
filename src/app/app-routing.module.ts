import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {JsQuestionsComponent} from "./pages/js-questions/js-questions.component";
import {RxjsQuestionsComponent} from "./pages/rxjs-questions/rxjs-questions.component";
import {NgrxQuestionsComponent} from "./pages/ngrx-questions/ngrx-questions.component";

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
