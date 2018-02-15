import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class UserServiceService {

  constructor(private router: Router,private http:HttpClient,private cookieService:CookieService) { }

  getSession(){
    return {
       headers: new HttpHeaders().append("Authorization", this.cookieService.get("Authorization"))
    }
  }

  getUser(){
    return this.cookieService.get("UserName");

  }

  setSession(user: LoggedUser) {
    this.http.post<Token>('http://localhost:8080/login',{
      username: user.username,
      password: user.password
    })
      .subscribe((res) => {
        this.cookieService.put("Authorization",res.token)
        this.cookieService.put("UserName",user.username)
        this.router.navigate(['calendar'])
      })


  }
}

export class LoggedUser{
  username:string;
  password:string;

  constructor() {
  }
}

export class Token{
  token:string;
}
