import {
  ChangeDetectionStrategy, Component, Input, OnInit
} from '@angular/core';
import {log} from "util";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent implements OnInit {

  private dayNames:String[] = ["pon","wt","śr","cz","pt","so","nd"];

  private date:Date;
  private firstDayOfMonth: Date;
  private grid:Map<number,Day[]>;
  private dateSelected =new Date();
  constructor() {

  }

  currentDay(){
    this.generateCalendar(new Date());
  }

  previousMonth(){
    this.firstDayOfMonth.setMonth(this.firstDayOfMonth.getMonth()-2);
    this.generateCalendar(this.firstDayOfMonth);
  }
  nextMonth(){
    this.generateCalendar(this.firstDayOfMonth);
  }

  private generateCalendar(date:Date) {
    this.date = date;
    this.firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth());
    this.grid = new Map();
    for (let i of [1, 2, 3, 4, 5, 6]) {
      this.grid.set(i, this.getWeek());
    }
  }

  ngOnInit() {
    this.generateCalendar(new Date());
  }

  select(day:Day) {
    this.grid.forEach((value: Day[], key: number) => {
      value.forEach(r=> r.selected=false)
    });
    day.selected = !day.selected;
    log(this.dateSelected + " vasfasd")
    this.dateSelected= day.date;
  }


  private getWeek():Day[] {
    var date: Day[] = [];
    for(let dayOfWeek of  [1, 2, 3, 4, 5, 6,7]){
      var day = new Date(this.firstDayOfMonth);
      var dayOfDate=this.firstDayOfMonth.getDay()==0?7:this.firstDayOfMonth.getDay();
      if(dayOfWeek == dayOfDate && this.firstDayOfMonth.getMonth() == this.date.getMonth()){
        date.push(new Day(this.firstDayOfMonth.getDate(), false, this.isCurrentDate(),false,day));
        this.firstDayOfMonth.setDate(this.firstDayOfMonth.getDate()+1);
      } else {
        date.push(this.buildDay());
      }
    }
    return date;
  }

  private isCurrentDate(){
    var currentDate = new Date();
    return this.firstDayOfMonth.getDate()== currentDate.getDate() && this.firstDayOfMonth.getMonth() == currentDate.getMonth()
    && this.firstDayOfMonth.getFullYear() == currentDate.getFullYear();
  }

  private buildDay() {
    return new Day(0, false, false, true,null);
  }
}

export class Day{
  dayNumber:number;
  selected:boolean;
  currentDay:boolean;
  isNullable:boolean;
  date :Date;


  constructor(dayNumber: number, selected: boolean, currentDay: boolean, isNullable: boolean, date :Date) {
    this.dayNumber = dayNumber;
    this.selected = selected;
    this.currentDay = currentDay;
    this.isNullable = isNullable;
    this.date = date;
  }


}

