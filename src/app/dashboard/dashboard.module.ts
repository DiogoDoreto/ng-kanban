import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { BoardService } from './board.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardEffects } from './effects/board.effects';
import { reducers } from './reducers';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('board', reducers.board),
    EffectsModule.forFeature([BoardEffects]),
  ],
  providers: [BoardService],
})
export class DashboardModule {}
