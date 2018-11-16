import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AddItemComponent } from './add-item/add-item.component';
import { BoardComponent } from './board.component';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import { ColumnEffects } from './effects/column.effects';
import { reducers } from './reducers';
import { CardService } from './services/card.service';
import { ColumnService } from './services/column.service';

const routes: Routes = [
  {
    path: 'board/:id',
    component: BoardComponent,
  },
];

@NgModule({
  declarations: [
    CardComponent,
    BoardComponent,
    ColumnComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('column', reducers.column),
    StoreModule.forFeature('card', reducers.card),
    EffectsModule.forFeature([ColumnEffects]),
  ],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
