import { Injectable } from '@angular/core';
import {UserServiceService} from "../login/user-service.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DashboardService {

  constructor(private userService:UserServiceService, private httpClient:HttpClient) {
  }

  getNewTaskCount():Observable<Response>{
    return this.httpClient.get<Response>("http://localhost:8080/api/new-task/count",this.userService.getSession())
  }

}

export class Response{
  count:number;
}
