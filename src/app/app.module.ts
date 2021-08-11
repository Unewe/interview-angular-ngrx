import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JsQuestionsComponent } from './components/js-questions/js-questions.component';
import { RxjsQuestionsComponent } from './components/rxjs-questions/rxjs-questions.component';
import { NgrxQuestionsComponent } from './components/ngrx-questions/ngrx-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsQuestionsComponent,
    RxjsQuestionsComponent,
    NgrxQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
