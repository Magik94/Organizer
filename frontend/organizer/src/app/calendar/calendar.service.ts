import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders().append("Authorization", "Basic dXNlcjE6dXNlcjFQYXNz")


};

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) {

  }

  checkTaskAvailable(date: Date):Observable<Get> {
    var result: Get = new Get();
    return this.http.get<Get>('http://localhost:8080/api/taskq/search/findByDateStartString?dateStart='
      +this.dateConvert(date), httpOptions);
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
  dateStart:string;
  description:string;
  status:string;
  workedTime:number;
  id:string;
  planningTime:number;
}
