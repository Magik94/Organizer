import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  title = 'app';
  userName:string ="unknow";


  constructor(private router:Router, private cookieService:CookieService) {
  }


  ngOnInit(): void {
    this.userName = this.cookieService.get("UserName");
  }

  logout() {
    this.cookieService.removeAll();
    this.router.navigate(['login'])
  }
}
