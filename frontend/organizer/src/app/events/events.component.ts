import { Component, OnInit } from '@angular/core';
import {Event, EventService} from "./events.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

  events:Event[];
  constructor(private eventService:EventService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        let count  = params['count'];
        if(count==null){
          count=10;
        }
        this.eventService.getEvents(count).subscribe(res =>{
          this.events= res.content;
        });

      });



  }

}
