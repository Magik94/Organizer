import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task/task.service";
import {Task} from "../task/task";
import {UserServiceService} from "../login/user-service.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [TaskService, UserServiceService]
})
export class ReportComponent implements OnInit {

  tasks: Task[] = [];
  @Input()
  status: string = "";
  @Input()
  allTask: boolean = true;

  checkDone: boolean = false;
  checkProgress: boolean = false;
  checkBacklog: boolean = false;

  constructor(private taskService: TaskService, private userService: UserServiceService) {
  }

  change() {
    this.allTask = !this.allTask;
    this.setTask();
  }

  ngOnInit() {

    if(this.status=="Backlog"){
      this.checkBacklog=true;
    }
    if(this.status=="Done"){
      this.checkDone=true;
    }
    if(this.status=="In progress"){
      this.checkProgress=true;
    }

    this.setTask();


  }

  private setTask() {
    this.tasks = [];
    this.taskService.getTasksAll().subscribe(items => {
        items.forEach(r => {
            if (this.status == "" || this.status == r.status) {
              if (this.allTask) {
                this.tasks.push(r);
              }
              else {
                if (r.userId == this.userService.getUser()) {
                  this.tasks.push(r);
                }
              }
            }
          }
        )
      }
    )
  }

  setStatus(s: string) {
    this.checkBacklog = false;
    this.checkProgress = false;
    this.checkDone = false;
    if(s=="Backlog"){
      this.checkBacklog=true;
    }
    if(s=="Done"){
      this.checkDone=true;
    }
    if(s=="In progress"){
      this.checkProgress=true;
    }


    if (s == this.status) {
      this.status = "";
    } else {
      this.status = s;
    }
    this.setTask();
  }
}
