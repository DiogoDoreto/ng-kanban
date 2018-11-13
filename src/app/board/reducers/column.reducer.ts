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

    case ColumnActionTypes.AddColumn: {
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

// TODO missing support for proper order. Will be fixed with support for multiple boards
export const getColumns = (state: State) => Object.values(state) as Column[];
