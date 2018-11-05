import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardService } from '../card.service';
import { Card } from '../Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input()
  cardId: number;

  card: Card;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.getCard();
  }

  getCard() {
    this.cardService.getCard(this.cardId).subscribe(card => (this.card = card));
  }
}
