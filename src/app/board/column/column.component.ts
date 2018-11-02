import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less'],
})
export class ColumnComponent implements OnInit {
  column = {
    id: 1,
    title: 'Backlog',
    cards: [1, 2, 3],
  };

  constructor() {}

  ngOnInit() {}
}
