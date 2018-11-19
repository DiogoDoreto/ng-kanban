import { BoardActions, BoardActionTypes } from '../actions/board.actions';
import { Board } from '../board.model';

export type State = Board[];

export const initialState: State = [];

export function reducer(state = initialState, action: BoardActions): State {
  switch (action.type) {
    case BoardActionTypes.LoadBoardsSuccess:
      return action.payload;

    case BoardActionTypes.AddBoardSuccess:
      return [...state, action.payload];

    default:
      return state;
  }
}

export const getBoards = (state: State) => state;
