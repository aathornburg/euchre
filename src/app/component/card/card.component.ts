import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()
  public card: Card;

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {}

  get cardValue(): string {
    return this.cardService.getCardValueAsString(this.card);
  }

  get cardSuit(): string {
    return this.cardService.getCardSuitAsString(this.card);
  }

}
