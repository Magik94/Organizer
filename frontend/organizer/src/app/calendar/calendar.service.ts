import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserServiceService} from "../login/user-service.service";



@Injectable()
export class CalendarService {
  constructor(private http: HttpClient,private userService:UserServiceService) {

  }

  getTaskForDate(date: Date):Observable<Get> {
    return this.http.get<Get>('http://localhost:8080/api/taskq/search/findByDateStartString?dateStart='
      +this.dateConvert(date), this.userService.getSession());
    // return result;
  }

  private dateConvert(date: Date):string{
    var day = "";
    if(date.getDate()<10){
      day="0"+date.getDate();
    }
    else {
      day=date.getDate()+"";
    }
    var month ="";
    if(date.getMonth()<10){
      month="0"+(date.getMonth()+1);
    }
    else {
      month=date.getMonth()+"";
    }
    return date.getFullYear() + "-" +month +"-"+day;
  }
}

export class Get {
  content: Item[];
};


export class Item{
  collectionValue?: boolean;
  title:string;
  startDate:Date;
  description:string;
  status:string;
  workedTime:Number;
  id:string;
  planningTime:Number;

}
