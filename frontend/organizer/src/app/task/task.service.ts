import {Injectable} from '@angular/core';
import {Task} from "./task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders().append("Authorization", "Basic dXNlcjE6dXNlcjFQYXNz")

};

@Injectable()
export class TaskService {


  constructor(private http: HttpClient) {
  }

  add(task: Task) {
    var day = task.startDate.setHours(task.startDate.getHours() + 2);
    this.http.post('http://localhost:8080/api/task', {
      id: task.id,
      title: task.title,
      startDate: new Date(day),
      description: task.description,
      status: task.status,
      endDate: task.endDate,
      workedTime: task.workedTime,
      planningTime: task.planningTime

    }, httpOptions).subscribe(
      res => {
        location.reload();
        alert("Zadanie dodano!!!")
        console.log(res);

      },
      err => {
        alert("Błąd przy dodawaniu zadania!")

      }
    );
  }
  remove(id:string){
    this.http.delete('http://localhost:8080/api/task?id='+id, httpOptions).subscribe();
  }
  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:8080/api/task",httpOptions);

  }
}

