import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../task/task";

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  @Input()
  task:Task;

  constructor() { }

  ngOnInit() {
  }

}
