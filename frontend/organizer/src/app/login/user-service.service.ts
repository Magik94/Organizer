import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class UserServiceService {

  constructor(private router: Router) { }
  static session:string;

  getSession(){
    return {
      headers: new HttpHeaders().append("Authorization", UserServiceService.session)
    }
  }

  setSession(user: LoggedUser) {
    console.log(user.username + " "+ user.password)
    UserServiceService.session="Basic "+btoa(user.username+":"+user.password);
    this.router.navigate(['calendar'])
  }
}

export class LoggedUser{
  username:String;
  password:String;

  constructor() {
  }
}
