import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [CardComponent, BoardComponent, ColumnComponent],
  exports: [BoardComponent],
  imports: [CommonModule, MatCardModule],
})
export class BoardModule {}
