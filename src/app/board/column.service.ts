import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Column } from './Column';
import { tap } from 'rxjs/operators';

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
  private ColumnsSubject = new BehaviorSubject<Column[]>(COLUMNS);

  getColumns(): Observable<Column[]> {
    return this.ColumnsSubject.asObservable();
  }

  reorderCard(column: Column, previousIndex: number, currentIndex: number) {
    moveItemInArray(column.cards, previousIndex, currentIndex);
    this.ColumnsSubject.next(COLUMNS);
  }

  moveCard(
    source: Column,
    destination: Column,
    previousIndex: number,
    currentIndex: number,
  ) {
    transferArrayItem(
      source.cards,
      destination.cards,
      previousIndex,
      currentIndex,
    );
    this.ColumnsSubject.next(COLUMNS);
  }
}
