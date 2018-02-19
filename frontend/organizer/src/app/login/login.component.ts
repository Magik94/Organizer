import {Component, OnInit} from '@angular/core';
import {LoggedUser, UserServiceService} from "./user-service.service";
import 'rxjs/add/operator/catch';
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoggedUser = new LoggedUser();
  isLogin = true;
  message: string ="";

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
  }

  send(user: LoggedUser) {
    this.userService.setSession(user);
  }

  login() {
    this.isLogin = !this.isLogin;
  }

  signup(user: LoggedUser) {
    this.userService.signup(user)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(res => {
          this.isLogin = true;
          this.message = res.message;
        },
        err => {
          console.log(err)
          this.message = err
        }
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    return new ErrorObservable(
      error.error.message);
  };
}
