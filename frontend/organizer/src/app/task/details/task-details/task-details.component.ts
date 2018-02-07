import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../../task.service";
import {Get, Item} from "../../../calendar/calendar.service";

import {tokenReference} from "@angular/compiler";
import {Task} from "../../task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [TaskService]
})
export class TaskDetailsComponent implements OnInit, OnChanges {

  @Input() selectDate: Date;
  @Input() taskInDay: Get;
  showEdit: boolean = false;
  lastSelectId: string;
  tasks: Get;
  task: Task = new Task();

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.taskInDay;
  }

  openEdit(id: Item) {
    this.showEdit = !(this.showEdit && this.lastSelectId == id.id);
    this.lastSelectId = id.id;
    this.task = this.map(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    var tmp = changes['taskInDay'];
    if (tmp != null) {
      this.tasks = tmp.currentValue;

    }
  }

  map(task: Item): Task {
    var tmp = new Task();
    tmp.id = task.id;
    tmp.startDate = task.startDate;
    tmp.description = task.description;
    tmp.title = task.title;
    tmp.status = task.status;
    tmp.planningTime = task.planningTime
    tmp.workedTime = task.workedTime
    return tmp;
  }

  remove(id: string){
    this.tasks.content = this.tasks.content.filter(r=> r.id!=id);
    this.taskService.remove(id);
  }
}
