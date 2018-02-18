import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {TaskService} from "../task/task.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService, TaskService]
})
export class DashboardComponent implements OnInit {

  taskCount: number = 0;
  taskBacklog: number = 0;
  taskInProgress: number = 0;
  taskDone: number = 0;

  constructor(private dashboardService: DashboardService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.dashboardService.getNewTaskCount().subscribe(res => this.taskCount = res.count);
    this.taskService.getTasks().subscribe(res => {
      console.log(res)
      this.taskBacklog = res.filter(r => r.status == "Backlog").length;
      console.log(this.taskBacklog)
      this.taskInProgress = res.filter(r => r.status == "In progress").length;
      console.log(this.taskInProgress)
      this.taskDone = res.filter(r => r.status == "Done").length;
      console.log(this.taskDone)

    })
  }

}
