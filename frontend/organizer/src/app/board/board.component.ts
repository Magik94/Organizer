import {Component, OnInit} from '@angular/core';
import {Task} from "../task/task";
import {TaskService} from "../task/task.service";

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

  constructor(private taskService: TaskService) {

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

    })
  }

}
