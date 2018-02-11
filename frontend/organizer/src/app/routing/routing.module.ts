import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {TaskAddComponent} from "../task/add/task-add.component";
import {CalendarComponent} from "../calendar/calendar.component";
import {FormsModule} from '@angular/forms';
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {IterablePipe} from "../calendar/IterablePipe";
import {EventComponent} from "../calendar/menu/event/event.component";
import {HttpClientModule} from "@angular/common/http";
import {TaskDetailsComponent} from "../task/details/task-details/task-details.component";
import {BoardComponent} from "../board/board.component";
import {BoardItemComponent} from "../board/board-item/board-item.component";
import {LoginComponent} from "../login/login.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'task/add', component: TaskAddComponent},
  {path: 'calendar', component: CalendarComponent,},
  {path: 'board', component: BoardComponent},
  {path: 'login', component: LoginComponent}

];


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    NgbModalModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule

  ],
  exports: [RouterModule],
  declarations: [
    DashboardComponent,
    TaskAddComponent,
    TaskDetailsComponent,
    CalendarComponent,
    IterablePipe,
    EventComponent,
    BoardComponent,
    BoardItemComponent


  ]

})
export class RoutingModule {
}
