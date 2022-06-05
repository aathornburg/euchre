import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  constructor(
    private deckService: DeckService
  ) { }

  public begin(): void {
    this.deckService.shuffleDeck();
    this.deckService.dealToAllPlayers();
  }
}
