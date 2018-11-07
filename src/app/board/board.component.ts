import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, HostBinding } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Card } from './Card';
import { CardService } from './card.service';
import { Column } from './Column';
import { ColumnService } from './column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  columns: Column[] = [];
  cards: Card[] = [];

  @HostBinding('class')
  private hostClass = 'mat-app-background';

  constructor(
    private columnService: ColumnService,
    private cardService: CardService,
  ) {}

  ngOnInit() {
    this.populate();
  }

  populate() {
    combineLatest(
      this.columnService.getColumns(),
      this.cardService.getCards(),
    ).subscribe(([columns, cards]) => {
      this.columns = columns;
      this.cards = cards;
    });
  }

  getColumnNodeId(column: Column): string {
    return `column-${column.id}`;
  }

  getCardsOfColumn(column: Column): Card[] {
    return column.cards
      .map(id => this.cards.find(card => card.id === id))
      .filter(Boolean);
  }

  drop(event: CdkDragDrop<Column>) {
    if (event.previousContainer === event.container) {
      this.columnService.reorderCard(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      this.columnService.moveCard(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addColumn(title: string) {
    this.columnService.add(title);
  }
}
