import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface State {
  params: Params;
}

export class Serializer implements RouterStateSerializer<State> {
  serialize(routerState: RouterStateSnapshot): State {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params } = route;
    return { params };
  }
}

export const getRouterParams = (state: State | undefined): Params =>
  state ? state.params : {};
