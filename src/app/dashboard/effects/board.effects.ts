import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  AddBoard,
  AddBoardSuccess,
  BoardActionTypes,
  LoadBoards,
  LoadBoardsSuccess,
} from '../actions/board.actions';
import { BoardService } from '../board.service';

@Injectable()
export class BoardEffects {
  @Effect()
  load$ = this.actions$.pipe(
    ofType<LoadBoards>(BoardActionTypes.LoadBoards),
    switchMap(() => this.boardService.getAll()),
    map(response => response.data),
    map(boards => new LoadBoardsSuccess(boards)),
  );

  @Effect()
  add$ = this.actions$.pipe(
    ofType<AddBoard>(BoardActionTypes.AddBoard),
    switchMap(action => this.boardService.add(action.payload)),
    map(board => new AddBoardSuccess(board)),
    tap(action => this.router.navigate([`/board/${action.payload.id}`])),
  );

  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private router: Router,
  ) {}
}
