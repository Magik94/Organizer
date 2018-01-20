import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../../task.service";
import {Get} from "../../../calendar/calendar.service";
import {Task} from "protractor/built/taskScheduler";
import {tokenReference} from "@angular/compiler";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [TaskService]
})
export class TaskDetailsComponent implements OnInit,OnChanges {

  @Input() selectDate:Date;
  @Input() taskInDay:Get;
  showEdit:boolean=false;
  lastSelectId:string;
  tasks:Get;

  constructor(taskService:TaskService) { }

  ngOnInit() {
    this.tasks = this.taskInDay;
  }

  openEdit(id:Get){
    alert(id);
    this.showEdit=!(this.showEdit && this.lastSelectId==id);
    this.lastSelectId = id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tasks=changes['taskInDay'].currentValue;
  }
}
