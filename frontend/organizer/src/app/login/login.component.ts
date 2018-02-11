import { Component, OnInit } from '@angular/core';
import {LoggedUser, UserServiceService} from "./user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:LoggedUser = new LoggedUser();
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  }

  send(user:LoggedUser){
    this.userService.setSession(user);
  }

}
