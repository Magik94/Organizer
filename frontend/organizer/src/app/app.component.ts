import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';


  constructor(private router:Router, private cookieService:CookieService) {
  }

  logout() {
    this.cookieService.removeAll();
    this.router.navigate(['login'])
  }
}
