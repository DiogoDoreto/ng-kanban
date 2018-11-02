import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  card = {
    id: 1,
    title: 'Buy Chocolate',
  };

  constructor() {}

  ngOnInit() {}
}
