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

  constructor() { }

  ngOnInit() {
  }

  next(task:Task){
    task.status="Done";
    this.changedTask.emit(this.task);
  }
  previus(task:Task){
    task.status="Backlog";
    this.changedTask.emit(this.task);
  }
}
