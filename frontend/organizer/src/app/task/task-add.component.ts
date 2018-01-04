import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "./task";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [TaskService]
})
export class TaskAddComponent implements OnInit,OnChanges {

  task:Task =new Task();
  @Input() startDate:Date;
  taskService:TaskService;


  constructor(taskSevice:TaskService) {

    this.taskService=taskSevice;
    }
  ngOnInit() {
    this.task = new Task();
    this.task.startDate=this.startDate;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.task.startDate=changes['startDate'].currentValue;

  }

  send(){
    this.taskService.add(this.task);

  }







}
