import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.model';
import { Column } from './column.model';
import { CardService } from './services/card.service';

@Pipe({
  name: 'getCardsFromColumn',
})
export class GetCardsFromColumnPipe implements PipeTransform {
  constructor(private cardService: CardService) {}

  transform(column: Column): Observable<Card[]> {
    return this.cardService.cards$.pipe(
      map(
        cards =>
          column.cards
            .map(id => cards.find(card => card.id === id))
            .filter(Boolean) as Card[],
      ),
    );
  }
}
