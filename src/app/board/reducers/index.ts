import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCard from './card.reducer';
import * as fromColumn from './column.reducer';

export interface State {
  card: fromCard.State;
  column: fromColumn.State;
}

export const reducers: ActionReducerMap<State> = {
  card: fromCard.reducer,
  column: fromColumn.reducer,
};

export const getCardState = createFeatureSelector<State, State['card']>('card');

export const getCard = createSelector(
  getCardState,
  fromCard.getCard,
);

export const getCards = createSelector(
  getCardState,
  fromCard.getCards,
);

export const getColumnState = createFeatureSelector<State, State['column']>(
  'column',
);

export const getColumns = createSelector(
  getColumnState,
  fromColumn.getColumns,
);
