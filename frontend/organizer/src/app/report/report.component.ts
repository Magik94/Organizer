import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task/task.service";
import {Task} from "../task/task";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [TaskService]
})
export class ReportComponent implements OnInit {

  tasks: Task[] =[];
  @Input()
  status: string = "";

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(items => {
        items.forEach(r => {
            if (this.status == "" || this.status == r.status)
              this.tasks.push(r);
          }
        )
      }
    )


  }

}
