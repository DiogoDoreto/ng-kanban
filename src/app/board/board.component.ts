import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, HostBinding, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Card } from './card.model';
import { CardService } from './card.service';
import { Column } from './column.model';
import { ColumnService } from './column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent implements OnInit {
  columns$: Observable<Column[]>;

  @HostBinding('class')
  private hostClass = 'mat-app-background';

  constructor(
    private columnService: ColumnService,
    private cardService: CardService,
  ) {}

  ngOnInit() {
    this.populate();

    this.columns$ = this.columnService.getColumns();
  }

  populate() {
    this.cardService.load();
    this.columnService.load();
  }

  getColumnNodeId(column: Column): string {
    return `column-${column.id}`;
  }

  getCardsOfColumn(column: Column): Observable<Card[]> {
    return combineLatest(column.cards.map(id => this.cardService.getCard(id)));
  }

  drop(event: CdkDragDrop<Column, Card>) {
    this.columnService.moveCard(
      event.previousContainer.data.id,
      event.container.data.id,
      event.item.data.id,
      event.currentIndex,
    );
  }

  addColumn(title: string) {
    this.columnService.add(title);
  }

  addCard(title: string, columnId: number) {
    this.cardService.add(title).subscribe(newCard => {
      this.columnService.addCardToColumn(newCard.id, columnId);
    });
  }
}
