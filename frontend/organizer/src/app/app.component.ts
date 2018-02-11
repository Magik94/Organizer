import {Component, ViewEncapsulation} from '@angular/core';
import {UserServiceService} from "./login/user-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';


  constructor(private router:Router) {
  }

  logout() {
    UserServiceService.session="";
    this.router.navigate(['login'])
  }
}
