import { Injectable } from '@angular/core';
import {Task} from "./task";

@Injectable()
export class TaskService {

  constructor() { }

  add(task: Task) {
    alert(task.title +" " +task.status +" " +task.description + " "+ task.startDate.toDateString() )
  }
}
