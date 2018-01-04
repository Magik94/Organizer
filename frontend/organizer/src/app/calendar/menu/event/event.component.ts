import {
  ChangeDetectionStrategy, Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {Task} from "../../../task/task";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnChanges {
  task = new Task();
  @Input() startDate:Date;

  constructor() { }

  ngOnInit() {
    this.task = new Task();
    this.task.startDate=this.startDate;

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.task.startDate=changes['startDate'].currentValue;


  }


}
