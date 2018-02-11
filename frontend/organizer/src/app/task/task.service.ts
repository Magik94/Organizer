import {Injectable} from '@angular/core';
import {Task} from "./task";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserServiceService} from "../login/user-service.service";


@Injectable()
export class TaskService {


  constructor(private http: HttpClient, private userService: UserServiceService) {
  }

  add(task: Task) {
    var day
    if(task.startDate != null) {

        day = new Date(task.startDate).setHours(new Date(task.startDate).getHours()+2);

    }
    this.http.post('http://localhost:8080/api/task', {
      id: task.id,
      title: task.title,
      startDate: new Date(day),
      description: task.description,
      status: task.status,
      endDate: task.endDate,
      workedTime: task.workedTime,
      planningTime: task.planningTime

    },
   this.userService.getSession()).subscribe(
      res => {
        alert("Operacja zakończoa sukcesem")

      },
      err => {
        alert("Błąd przy dodawaniu zadania!")

      }
    );
  }
  remove(id:string){
    this.http.delete('http://localhost:8080/api/task?id='+id, this.userService.getSession()).subscribe();
  }
  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:8080/api/task",this.userService.getSession());

  }
}

