import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { AddColumnComponent } from './add-column/add-column.component';
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
    AddColumnComponent,
  ],
  exports: [BoardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
