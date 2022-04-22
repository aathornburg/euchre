import { Injectable } from '@angular/core';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  constructor(
    private cardService: CardService
  ) { }

  public begin(): void {
    this.cardService.shuffleDeck();
    this.cardService.dealToAllPlayers();
  }
}
