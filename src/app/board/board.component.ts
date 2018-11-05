import { Component, OnInit } from '@angular/core';
import { Column } from './Column';
import { ColumnService } from './column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  columns: Column[] = [];

  constructor(private columnService: ColumnService) {}

  ngOnInit() {
    this.getColumns();
  }

  getColumns() {
    this.columnService
      .getColumns()
      .subscribe(columns => (this.columns = columns));
  }
}
