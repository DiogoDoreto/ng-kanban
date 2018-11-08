import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCard from '../board/reducers/card.reducer';

export interface State {
  card: fromCard.State;
}

export const reducers: ActionReducerMap<State> = {
  card: fromCard.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getCardState = createFeatureSelector<State, fromCard.State>(
  'card',
);

export const getCard = createSelector(getCardState, fromCard.getCard);
