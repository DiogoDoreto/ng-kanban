import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCard from '../board/reducers/card.reducer';
import * as fromColumn from '../board/reducers/column.reducer';

export interface State {
  card: fromCard.State;
  column: fromColumn.State;
}

export const reducers: ActionReducerMap<State> = {
  card: fromCard.reducer,
  column: fromColumn.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getCardState = createFeatureSelector<State, fromCard.State>(
  'card',
);

export const getCard = createSelector(
  getCardState,
  fromCard.getCard,
);

export const getCards = createSelector(
  getCardState,
  fromCard.getCards,
);

export const getColumnState = createFeatureSelector<State, fromColumn.State>(
  'column',
);

export const getColumns = createSelector(
  getColumnState,
  fromColumn.getColumns,
);
