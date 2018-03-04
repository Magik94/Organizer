import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserServiceService} from "../login/user-service.service";

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient,private userSevice:UserServiceService) {
  }


  getEvents(count:number):Observable<Content> {
    return this.httpClient.get<Content>("http://localhost:8080/api/event/"+count,this.userSevice.getSession())
  }


}

export  class Content{
  content:Event[]
}

export class Event {
  status: string;
  date: Date;
  username: string;
  body: string;


}
