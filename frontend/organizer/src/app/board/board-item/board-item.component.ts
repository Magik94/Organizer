import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../task/task";

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  @Input()
  task:Task;
  @Output()
  changedTask = new EventEmitter<Task>();

  @Output()
  removeTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(id:string){
    this.removeTask.emit(id);
  }

  next(task:Task){
    if (task.status == "Backlog") {
      task.status="In progress";
    }else
    if (task.status == "In progress") {
      task.status="Done";
    }
    this.changedTask.emit(this.task);
  }
  previous(task:Task){
    if (task.status == "Done") {
      task.status="In progress";
    }else
    if (task.status == "In progress") {
      task.status="Backlog";
    }
    this.changedTask.emit(this.task);
  }
}
