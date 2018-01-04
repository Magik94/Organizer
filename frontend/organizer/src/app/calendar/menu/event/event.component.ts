import {
  ChangeDetectionStrategy, Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() selectDate:Date;

  constructor() { }

  ngOnInit() {


  }



}
