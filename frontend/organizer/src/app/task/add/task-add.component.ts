import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";
import {Router} from "@angular/router";


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


  constructor(taskSevice: TaskService,private router: Router) {
    this.taskService = taskSevice;
  }

  ngOnInit() {
    if(this.task==null) {
      this.task = new Task();
    }
    if(  this.task.startDate==null) {
      this.task.startDate = this.selectDate;
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    var tmp = changes['selectDate'];
    if(tmp!=null && this.task!=null){
      this.task.startDate = tmp.currentValue;
    }

  }

  send() {
    this.taskService.add(this.task);
    this.onRefresh();
  }

  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

    let currentUrl = this.router.url + '?';

    this.router.navigateByUrl(currentUrl)
      .then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
  }



}
