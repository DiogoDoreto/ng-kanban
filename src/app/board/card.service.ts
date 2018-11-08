import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getCard, State } from '../reducers';
import { LoadCards } from './actions';
import { Card } from './card.model';

const CARDS: Card[] = [
  { id: 1, title: 'Learn Angular' },
  { id: 2, title: 'Buy milk' },
  { id: 3, title: 'Server Side Rendering' },
];

@Injectable()
export class CardService {
  constructor(private store: Store<State>) {}

  load() {
    this.store.dispatch(new LoadCards(CARDS));
  }

  getCard(id: number): Observable<Card> {
    return this.store.pipe(select(getCard, id));
  }

  add(title: string): Observable<Card> {
    const id = 1 + Math.max(...CARDS.map(c => c.id));
    const newCard = {
      id,
      title,
    };
    CARDS.push(newCard);
    return of(newCard);
  }
}
