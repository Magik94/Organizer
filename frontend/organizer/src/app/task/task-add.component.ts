import {Component, Input, OnInit} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent implements OnInit {

  @Input() task:Task;


  constructor() {
      }
  ngOnInit() {
    this.task = new Task();
  }

  send(){
    alert(this.task.title +" " +this.task.status +" " +this.task.description + " "+ this.task.startDate.toDateString() )
  }







}
