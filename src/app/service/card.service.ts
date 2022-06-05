import { Injectable } from '@angular/core';
import { Suit } from '../enum/suit.enum';
import { Value } from '../enum/value.enum';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public getCardValueAsString(card: Card): string {
    switch(Number(card.value)) {
      case Value.Nine:
        return '9';
      case Value.Ten:
        return '10';
      case Value.Queen:
        return 'Q';
      case Value.Jack:
        return 'J';
      case Value.King:
        return 'K';
      case Value.Ace:
        return 'A';
    }
  }

  public getCardSuitAsString(card: Card): string {
    switch(Number(card.suit)) {
      case Suit.Club:
        return '♣';
      case Suit.Diamond:
        return '♦';
      case Suit.Heart:
        return '♥';
      case Suit.Spade:
        return '♠';
    }
  }
}
