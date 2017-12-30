import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskAddComponent} from "../task/task-add.component";
import {CalendarComponent} from "../calendar/calendar.component";
import { FormsModule } from '@angular/forms';
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";



const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'task/add', component: TaskAddComponent},
  { path: 'calendar', component: CalendarComponent}

  ];


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
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
