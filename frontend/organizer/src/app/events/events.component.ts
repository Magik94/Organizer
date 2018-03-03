import { Component, OnInit } from '@angular/core';
import {Event, EventService} from "./events.service";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

  events:Event[];
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res =>{
      this.events= res.content;
    });

  }

}
