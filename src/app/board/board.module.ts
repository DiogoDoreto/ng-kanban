import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [CardComponent, BoardComponent, ColumnComponent],
  exports: [BoardComponent],
  imports: [CommonModule],
})
export class BoardModule {}
