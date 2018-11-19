import { Component, Input } from '@angular/core';
import { Column } from '../column.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less'],
})
export class ColumnComponent {
  @Input()
  column: Column;
}
