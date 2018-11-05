import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';
import { ColumnService } from './column.service';
import { CardService } from './card.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CardComponent, BoardComponent, ColumnComponent],
  exports: [BoardComponent],
  imports: [CommonModule, MatCardModule, DragDropModule],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
