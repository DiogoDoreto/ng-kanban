import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board.component';
import { ColumnComponent } from './column/column.component';
import { ColumnService } from './column.service';
import { CardService } from './card.service';

@NgModule({
  declarations: [CardComponent, BoardComponent, ColumnComponent],
  exports: [BoardComponent],
  imports: [CommonModule, MatCardModule],
  providers: [ColumnService, CardService],
})
export class BoardModule {}
