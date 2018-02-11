import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RoutingModule} from "./routing/routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserServiceService} from "./login/user-service.service";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {CookieService} from "angular2-cookie/core";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UserServiceService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
