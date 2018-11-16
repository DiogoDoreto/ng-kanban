import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import {
  delay,
  filter,
  ignoreElements,
  map,
  share,
  switchMap,
  tap,
} from 'rxjs/operators';
import * as fromApp from '../../reducers';
import { InsertCard, LoadColumns, RemoveCard } from '../actions';
import { Column } from '../column.model';
import * as fromBoard from '../reducers';

const COLUMNS: Column[] = [
  {
    id: 1,
    title: 'Backlog',
    cards: [1, 2],
    position: 1,
    boardId: 1,
  },
  {
    id: 3,
    title: 'Done',
    cards: [],
    position: 3,
    boardId: 1,
  },
  {
    id: 4,
    title: 'Done',
    cards: [],
    position: 1,
    boardId: 2,
  },
  {
    id: 2,
    title: 'In progress',
    cards: [3],
    position: 2,
    boardId: 1,
  },
];

@Injectable()
export class ColumnService {
  constructor(private store: Store<fromApp.State & fromBoard.State>) {}

  private colsFromBoard$ = this.store.pipe(
    map(state => {
      const params = fromApp.getRouterParams(state);
      const columns = fromBoard.getColumns(state, Number(params.id));
      return columns;
    }),
  );

  requestColumns$ = this.colsFromBoard$.pipe(
    filter(cols => !cols || !cols.length),
    switchMap(() => of(COLUMNS)), // TODO replace by API call
    delay(500), // simulate network
    tap(cols => this.store.dispatch(new LoadColumns(cols))),
    share(),
  );

  columns$ = merge(
    this.requestColumns$.pipe(ignoreElements()),
    this.colsFromBoard$,
  );

  moveCard(
    fromColumnId: number,
    toColumnId: number,
    cardId: number,
    position: number,
  ) {
    this.store.dispatch(new RemoveCard({ columnId: fromColumnId, cardId }));
    this.store.dispatch(
      new InsertCard({ columnId: toColumnId, cardId, position }),
    );
  }

  addCardToColumn(cardId: number, columnId: number) {
    this.store.dispatch(new InsertCard({ columnId, cardId }));
  }
}
