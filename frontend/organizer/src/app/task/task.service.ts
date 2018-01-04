import { Injectable } from '@angular/core';
import {Task} from "./task";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders().append("Authorization","Basic dXNlcjE6dXNlcjFQYXNz")

};

@Injectable()
export class TaskService {


  constructor(private http:HttpClient) { }

  add(task: Task) {

    this.http.post('http://localhost:8080/api/task',{
      title:task.title,
      startDate: task.startDate,
      description:task.description,
      status:task.status,
      endDate:task.endDate

    },httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
