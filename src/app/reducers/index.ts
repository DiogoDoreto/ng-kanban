import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCard from '../board/reducers/card.reducer';
import * as fromColumn from '../board/reducers/column.reducer';
import * as fromRouter from './router-state.serializer';

export interface State {
  card: fromCard.State;
  column: fromColumn.State;
  router: RouterReducerState<fromRouter.State> | undefined;
}

export const reducers: ActionReducerMap<State> = {
  card: fromCard.reducer,
  column: fromColumn.reducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

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

export const getRouter = createFeatureSelector<State, State['router']>(
  'router',
);

export const getRouterState = createSelector(
  getRouter,
  router => router && router.state,
);

export const getRouterParams = createSelector(
  getRouterState,
  fromRouter.getRouterParams,
);

export const getColumns = createSelector(
  getColumnState,
  createSelector(
    getRouterParams,
    ({ id }) => Number(id),
  ),
  fromColumn.getColumns,
);
