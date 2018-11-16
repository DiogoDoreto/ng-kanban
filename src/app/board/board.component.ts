import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../reducers';
import * as boardActions from './actions';
import { Card } from './card.model';
import { Column } from './column.model';
import { CardService } from './services/card.service';
import { ColumnService } from './services/column.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less'],
})
export class BoardComponent {
  columns$: Observable<Column[]>;

  @HostBinding('class')
  private hostClass = 'mat-app-background';

  constructor(
    private columnService: ColumnService,
    private cardService: CardService,
    private store: Store<fromApp.State>,
  ) {
    this.columns$ = this.columnService.columns$;
  }

  getColumnNodeId(column: Column): string {
    return `column-${column.id}`;
  }

  getCardsOfColumn(column: Column): Observable<Card[]> {
    return combineLatest(
      column.cards.map(id => this.cardService.getCard(id)),
    ).pipe(map(cards => cards.filter(Boolean)));
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
    this.store.dispatch(new boardActions.AddColumn({ title }));
  }

  addCard(title: string, columnId: number) {
    this.cardService.add(title).subscribe(newCard => {
      this.columnService.addCardToColumn(newCard.id, columnId);
    });
  }

  updateCardTitle(id, newTitle) {
    this.cardService.updateTitle(id, newTitle);
  }
}
