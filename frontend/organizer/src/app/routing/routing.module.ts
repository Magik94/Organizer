import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskAddComponent} from "../task/task-add.component";


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'task/add', component: TaskAddComponent}

  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
    exports: [RouterModule],
  declarations: [
    DashboardComponent,
    TaskAddComponent
  ]
})
export class RoutingModule { }
