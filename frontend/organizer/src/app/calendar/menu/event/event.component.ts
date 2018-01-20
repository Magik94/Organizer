import {
  ChangeDetectionStrategy, Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {Get} from "../../calendar.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() selectDate:Date;
  @Input() taskInDay:Get;

  constructor() { }

  ngOnInit() {


  }



}
