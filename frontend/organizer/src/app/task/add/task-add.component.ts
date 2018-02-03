import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [TaskService]
})
export class TaskAddComponent implements OnInit, OnChanges {


  @Input() task: Task;
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
    var tmp = changes['selectDate'];
    if(tmp!=null && this.task!=null){
      this.task.startDate = tmp.currentValue;;
    }

  }

  send() {
    this.taskService.add(this.task);

  }





}
