import {Component, OnInit} from '@angular/core';
import {Task} from "../task/task";
import {TaskService} from "../task/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [TaskService]
})
export class BoardComponent implements OnInit {

  tasksBacklog: Task[] = [];
  tasksInProgress: Task[] = [];
  tasksDone: Task[] = [];

  constructor(private taskService: TaskService, private router:Router) {

  }
  changed(t:Task) {
    this.tasksBacklog = this.tasksBacklog.filter(item => item.id !== t.id);
    this.tasksInProgress =this.tasksInProgress.filter(item => item.id !== t.id);
    this.tasksDone =this.tasksDone.filter(item => item.id !== t.id);
    if (t.status == "Backlog") {
      this.tasksBacklog.push(t);
    }
    if (t.status == "In progress") {
      this.tasksInProgress.push(t);
    }
    if (t.status == "Done") {
      this.tasksDone.push(t);
    }
    this.taskService.add(t);
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(r => {
      r.forEach(t => {
        if (t.status == "Backlog") {
          this.tasksBacklog.push(t);
        }
        if (t.status == "In progress") {
          this.tasksInProgress.push(t);
        }
        if (t.status == "Done") {
          this.tasksDone.push(t);
        }
      })

    },
      error => this.router.navigate(['login']))
  }

}
