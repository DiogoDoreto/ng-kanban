import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { metaReducers, reducers } from './reducers';
import * as fromRouter from './reducers/router-state.serializer';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BoardModule,
    DashboardModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: fromRouter.Serializer },
  ],
  // bootstrap: [AppComponent],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(
    private injector: Injector,
    private router: Router,
    private location: Location,
  ) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('my-ng-kanban', el);

    this.location.subscribe(data => this.router.navigateByUrl(data.url || ''));

    this.router.navigateByUrl(this.location.path(true));
  }
}
