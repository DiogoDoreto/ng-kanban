import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AddItemComponent } from './add-item/add-item.component';
import { BoardComponent } from './board.component';
import { CardService } from './card.service';
import { CardComponent } from './card/card.component';
import { ColumnService } from './column.service';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    CardComponent,
    BoardComponent,
    ColumnComponent,
    AddItemComponent,
  ],
  exports: [BoardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
