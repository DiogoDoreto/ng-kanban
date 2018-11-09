import { Action } from '@ngrx/store';
import { Card } from '../card.model';

export enum CardActionTypes {
  LoadCards = '[Card] Load Cards',
  AddCard = '[Card] Add Card',
  UpdateTitle = '[Card] Update Title',
}

export class LoadCards implements Action {
  readonly type = CardActionTypes.LoadCards;

  constructor(public payload: Card[]) {}
}

export class AddCard implements Action {
  readonly type = CardActionTypes.AddCard;

  constructor(public payload: Card) {}
}

export class UpdateTitle implements Action {
  readonly type = CardActionTypes.UpdateTitle;

  constructor(public payload: { id: number; title: string }) {}
}

export type CardActions = LoadCards | AddCard | UpdateTitle;
