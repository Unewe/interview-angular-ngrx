import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationStart} from '@angular/router';
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  name: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((value) => console.log(value));
  }
}
