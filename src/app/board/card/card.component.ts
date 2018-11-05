import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;

  @Input()
  isDragging = false;

  constructor() {}

  ngOnInit() {}
}
