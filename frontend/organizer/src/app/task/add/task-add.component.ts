import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task";
import {Router} from "@angular/router";
import {UserServiceService} from "../../login/user-service.service";


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
  providers: [TaskService,UserServiceService]
})
export class TaskAddComponent implements OnInit, OnChanges {


  @Input() task: Task;
  @Input() selectDate: Date;
  taskService: TaskService;
  users:string[];
  currentUser:string;


  constructor(taskSevice: TaskService,private router: Router, private userService: UserServiceService) {
    this.taskService = taskSevice;
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
    if(this.task==null) {
      this.task = new Task();
    }
    if(  this.task.startDate==null) {
      this.task.startDate = this.selectDate;
    }
    this.userService.getAll().subscribe(res =>{
      this.users = res;
    })
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
    this.router.navigated = false;
  }



}
