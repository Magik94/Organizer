import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../../task.service";
import {Get} from "../../../calendar/calendar.service";
import {Task} from "protractor/built/taskScheduler";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [TaskService]
})
export class TaskDetailsComponent implements OnInit,OnChanges {

  @Input() taskInDay:Get;
  tasks:Get;

  constructor(taskService:TaskService) { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.tasks=changes['taskInDay'].currentValue;
  }
}
