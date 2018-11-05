import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Column } from './Column';

const COLUMNS: Column[] = [
  {
    id: 1,
    title: 'Backlog',
    cards: [1, 2],
  },
  {
    id: 2,
    title: 'In progress',
    cards: [3],
  },
  {
    id: 3,
    title: 'Done',
    cards: [],
  },
];

@Injectable()
export class ColumnService {
  getColumns(): Observable<Column[]> {
    return of(COLUMNS);
  }
}
