import { Component, OnInit } from '@angular/core';
import {DemoComponent} from "../calendar/calendar-template/demo/component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DemoComponent]
})
export class DashboardComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
