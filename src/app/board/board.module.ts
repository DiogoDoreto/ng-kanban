import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AddItemComponent } from './add-item/add-item.component';
import { BoardComponent } from './board.component';
import { CardService } from './card.service';
import { CardComponent } from './card/card.component';
import { ColumnService } from './column.service';
import { ColumnComponent } from './column/column.component';
import { ColumnEffects } from './effects/column.effects';

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
    EffectsModule.forFeature([ColumnEffects]),
  ],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
