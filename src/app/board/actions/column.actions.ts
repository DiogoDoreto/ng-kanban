import { Action } from '@ngrx/store';
import { Column } from '../column.model';

export enum ColumnActionTypes {
  LoadColumns = '[Column] Load Columns',
  AddColumn = '[Column] Add Column',
  AddColumnSuccess = '[Column] Add Column - Success',
  InsertCard = '[Column] Insert Card',
  RemoveCard = '[Column] Remove Card',
}

export class LoadColumns implements Action {
  readonly type = ColumnActionTypes.LoadColumns;

  constructor(public payload: Column[]) {}
}

export class AddColumn implements Action {
  readonly type = ColumnActionTypes.AddColumn;

  constructor(public payload: { title: string }) {}
}

export class AddColumnSuccess implements Action {
  readonly type = ColumnActionTypes.AddColumnSuccess;

  constructor(public payload: Column) {}
}

export class InsertCard implements Action {
  readonly type = ColumnActionTypes.InsertCard;

  constructor(
    public payload: { columnId: number; cardId: number; position?: number },
  ) {}
}

export class RemoveCard implements Action {
  readonly type = ColumnActionTypes.RemoveCard;

  constructor(public payload: { columnId: number; cardId: number }) {}
}

export type ColumnActions =
  | LoadColumns
  | AddColumn
  | AddColumnSuccess
  | InsertCard
  | RemoveCard;
