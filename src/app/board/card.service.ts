import { Injectable } from '@angular/core';
import { Card } from './Card';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const CARDS: Card[] = [
  { id: 1, title: 'Learn Angular' },
  { id: 2, title: 'Buy milk' },
  { id: 3, title: 'Server Side Rendering' },
];

@Injectable()
export class CardService {
  getCards(): Observable<Card[]> {
    return of(CARDS);
  }

  getCard(id: number): Observable<Card> {
    return this.getCards().pipe(
      map(cards => cards.find(card => card.id === id)),
    );
  }
}
