import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskAddComponent} from "../task/task-add.component";
import {DemoModule} from "../calendar/calendar-template/demo/module";
import {CalendarComponent} from "../calendar/calendar.component";
import { FormsModule } from '@angular/forms';
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DemoUtilsModule} from "../calendar/calendar-template/demo-utils/module";
import {BrowserModule} from "@angular/platform-browser";



const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'task/add', component: TaskAddComponent},
  { path: 'calendar', component: CalendarComponent}

  ];


@NgModule({

  imports: [
    DemoModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    DemoUtilsModule,
    NgbModule,
    NgbModalModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule

  ],
    exports: [RouterModule],
  declarations: [
    DashboardComponent,
    TaskAddComponent,
    CalendarComponent
  ]
})
export class RoutingModule { }
