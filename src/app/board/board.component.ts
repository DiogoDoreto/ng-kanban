import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class BoardComponent implements OnInit {
  columns$: Observable<Column[]>;

  constructor(
    private columnService: ColumnService,
    private cardService: CardService,
    private store: Store<fromApp.State>,
  ) {}

  ngOnInit() {
    this.columns$ = this.columnService.columns$;
  }

  getColumnNodeId(column: Column): string {
    return `column-${column.id}`;
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
