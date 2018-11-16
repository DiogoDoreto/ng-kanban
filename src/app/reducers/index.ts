import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from './router-state.serializer';

export interface State {
  router: RouterReducerState<fromRouter.State> | undefined;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

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
