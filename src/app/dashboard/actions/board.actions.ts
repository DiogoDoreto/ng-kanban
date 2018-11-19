import { Action } from '@ngrx/store';
import { Board } from '../board.model';

export enum BoardActionTypes {
  LoadBoards = '[Board] Load Boards',
  LoadBoardsSuccess = '[Board] Load Boards - Success',
  LoadBoardsFailure = '[Board] Load Boards - Failure',
  AddBoard = '[Board] Add Board',
  AddBoardSuccess = '[Board] Add Board - Success',
  AddBoardFailure = '[Board] Add Board - Failure',
}

export class LoadBoards implements Action {
  readonly type = BoardActionTypes.LoadBoards;
}

export class LoadBoardsSuccess implements Action {
  readonly type = BoardActionTypes.LoadBoardsSuccess;

  constructor(public payload: Board[]) {}
}

export class LoadBoardsFailure implements Action {
  readonly type = BoardActionTypes.LoadBoardsFailure;
}

export class AddBoard implements Action {
  readonly type = BoardActionTypes.AddBoard;

  constructor(public payload: Partial<Board>) {}
}

export class AddBoardSuccess implements Action {
  readonly type = BoardActionTypes.AddBoardSuccess;

  constructor(public payload: Board) {}
}

export class AddBoardFailure implements Action {
  readonly type = BoardActionTypes.AddBoardFailure;
}

export type BoardActions =
  | LoadBoards
  | LoadBoardsSuccess
  | LoadBoardsFailure
  | AddBoard
  | AddBoardSuccess
  | AddBoardFailure;
