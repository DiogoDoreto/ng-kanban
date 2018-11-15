import { ColumnActions, ColumnActionTypes } from '../actions';
import { Column } from '../column.model';

export interface State {
  [key: number]: Column;
}

export const initialState: State = {};

export function reducer(state = initialState, action: ColumnActions): State {
  switch (action.type) {
    case ColumnActionTypes.LoadColumns: {
      return action.payload.reduce((newState, column) => {
        return {
          ...newState,
          [column.id]: column,
        };
      }, {});
    }

    case ColumnActionTypes.AddColumnSuccess: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }

    case ColumnActionTypes.InsertCard: {
      const column = state[action.payload.columnId];
      const position =
        action.payload.position !== undefined
          ? action.payload.position
          : column.cards.length;
      const newCards = [
        ...column.cards.slice(0, position),
        action.payload.cardId,
        ...column.cards.slice(position),
      ];
      return {
        ...state,
        [column.id]: {
          ...column,
          cards: newCards,
        },
      };
    }

    case ColumnActionTypes.RemoveCard: {
      const column = state[action.payload.columnId];
      const newCards = column.cards.filter(id => id !== action.payload.cardId);
      return {
        ...state,
        [column.id]: {
          ...column,
          cards: newCards,
        },
      };
    }

    default:
      return state;
  }
}

export const getColumns = (state: State, boardId: number) => {
  const columns: Column[] = Object.values(state);
  return columns
    .filter(col => col.boardId === boardId)
    .sort((a, b) => a.position - b.position);
};
