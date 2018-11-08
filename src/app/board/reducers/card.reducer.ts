import { CardActions, CardActionTypes } from '../actions';
import { Card } from '../card.model';

export interface State {
  [key: number]: Card;
}

export const initialState: State = {};

export function reducer(state = initialState, action: CardActions): State {
  switch (action.type) {
    case CardActionTypes.LoadCards: {
      return action.payload.reduce((newState, card) => {
        return {
          ...newState,
          [card.id]: card,
        };
      }, {});
    }
    case CardActionTypes.AddCard: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default:
      return state;
  }
}

export const getCard = (state: State, id: number) => state[id];
