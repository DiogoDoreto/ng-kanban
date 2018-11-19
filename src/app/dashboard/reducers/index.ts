import * as fromBoard from './board.reducer';
import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';

export interface State {
  board: fromBoard.State;
}

export const reducers: ActionReducerMap<State> = {
  board: fromBoard.reducer,
};

export const getBoardState = createFeatureSelector<State['board']>('board');

export const getBoards = createSelector(
  getBoardState,
  fromBoard.getBoards,
);
