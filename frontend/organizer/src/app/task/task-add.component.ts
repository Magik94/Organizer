import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from "./task";
import {log} from "util";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit,OnChanges {

  task:Task =new Task();
  @Input() startDate:Date;


  constructor() {
      }
  ngOnInit() {
    this.task = new Task();
    this.task.startDate=this.startDate;
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.task.startDate=changes['startDate'].currentValue;

  }

  send(){
    alert(this.task.title +" " +this.task.status +" " +this.task.description + " "+ this.task.startDate.toDateString() )
  }







}
