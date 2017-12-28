import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskAddComponent} from "../task/task-add.component";
import {DemoModule} from "../demo/module";
import {CalendarComponent} from "../calendar/calendar.component";


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
  ],
    exports: [RouterModule],
  declarations: [
    DashboardComponent,
    TaskAddComponent,
    CalendarComponent
  ]
})
export class RoutingModule { }
