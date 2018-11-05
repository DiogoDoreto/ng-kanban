import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../Column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less'],
})
export class ColumnComponent implements OnInit {
  @Input()
  column: Column;

  constructor() {}

  ngOnInit() {}
}
