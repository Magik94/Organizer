import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";
import {Get, Item} from "../../calendar/calendar.service";


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [TaskService]
})
export class TaskAddComponent implements OnInit, OnChanges {

  task: Task = new Task();
  @Input() selectDate: Date;
  taskService: TaskService;


  constructor(taskSevice: TaskService) {
    this.taskService = taskSevice;
  }

  ngOnInit() {
    this.task = new Task();
    this.task.startDate = this.selectDate;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.task.startDate = changes['selectDate'].currentValue;
  }

  send() {
    this.taskService.add(this.task);

  }




}
