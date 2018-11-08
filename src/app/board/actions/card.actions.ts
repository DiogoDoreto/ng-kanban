import { Action } from '@ngrx/store';
import { Card } from '../card.model';

export enum CardActionTypes {
  LoadCards = '[Card] Load Cards',
}

export class LoadCards implements Action {
  readonly type = CardActionTypes.LoadCards;

  constructor(public payload: Card[]) {}
}

export type CardActions = LoadCards;
