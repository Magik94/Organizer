import {
  ChangeDetectionStrategy, Component, Input, NgZone, OnInit
} from '@angular/core';
import {log} from "util";
import {CalendarService, Get} from "./calendar.service";
import {Task} from "../task/task";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarService]

})
export class CalendarComponent implements OnInit {

  dayNames: String[] = ["pon", "wt", "śr", "cz", "pt", "so", "nd"];

  date: Date;
  firstDayOfMonth: Date;
  grid: Map<number, Day[]>;
  dateSelected = new Date();
  calendarService: CalendarService;
  taskInDay:Get;

  constructor(calendarService: CalendarService) {
    this.calendarService = calendarService;
  }

  currentDay() {
    this.generateCalendar(new Date());
  }

  previousMonth() {
    this.firstDayOfMonth.setMonth(this.firstDayOfMonth.getMonth() - 2);
    this.generateCalendar(this.firstDayOfMonth);
  }

  nextMonth() {
    this.generateCalendar(this.firstDayOfMonth);
  }

  private generateCalendar(date: Date) {
    this.date = date;
    this.firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth());
    this.grid = new Map();
    for (let i of [1, 2, 3, 4, 5, 6]) {
      this.grid.set(i, this.getWeek());
    }

    this.grid.forEach((value: Day[], key: number) => {
      value.forEach((day) => {
        if (day.date !== null) {
          this.calendarService.getTaskForDate(day.date).subscribe((res) => {
                day.isTask = !res.content[0].collectionValue;
                day.tasks = res;
                if(day.currentDay){
                  this.taskInDay = day.tasks;
                }
            }
          );
        }

      })

    });



  }

  ngOnInit() {
    this.generateCalendar(new Date());
  }

  select(day: Day) {
    this.grid.forEach((value: Day[], key: number) => {
      value.forEach(r => r.selected = false)
    });
    day.selected = !day.selected;
    this.dateSelected = day.date;
    this.taskInDay = day.tasks;
  }


  private getWeek(): Day[] {
    var date: Day[] = [];
    for (let dayOfWeek of  [1, 2, 3, 4, 5, 6, 7]) {
      var day = new Date(this.firstDayOfMonth);
      var dayOfDate = this.firstDayOfMonth.getDay() == 0 ? 7 : this.firstDayOfMonth.getDay();
      if (dayOfWeek == dayOfDate && this.firstDayOfMonth.getMonth() == this.date.getMonth()) {
        var dayGenerated: Day = new Day(this.firstDayOfMonth.getDate(), false, this.isCurrentDate(), false, day);
        date.push(dayGenerated);
        this.firstDayOfMonth.setDate(this.firstDayOfMonth.getDate() + 1);
      } else {
        date.push(this.buildDay());
      }
    }
    return date;
  }

  private isCurrentDate() {
    var currentDate = new Date();
    return this.firstDayOfMonth.getDate() == currentDate.getDate() && this.firstDayOfMonth.getMonth() == currentDate.getMonth()
      && this.firstDayOfMonth.getFullYear() == currentDate.getFullYear();
  }

  private buildDay() {
    return new Day(0, false, false, true, null);
  }
}

export class Day {
  dayNumber: number;
  selected: boolean;
  currentDay: boolean;
  isNullable: boolean;
  date: Date;
  isTask: boolean;
  tasks:Get;


  constructor(dayNumber: number, selected: boolean, currentDay: boolean, isNullable: boolean, date: Date) {
    this.dayNumber = dayNumber;
    this.selected = selected;
    this.currentDay = currentDay;
    this.isNullable = isNullable;
    this.date = date;
  }


}

