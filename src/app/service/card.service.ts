import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Card } from '../model/card.model';
import { Hand } from '../model/hand.model';
import { Player } from '../model/player.model';
import { CardStore } from '../store/card.store';
import { GameManagerService } from './game-manager.service';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private deck$: Observable<Card[]> = this.cardStore.select('deck');

  constructor(
    private cardStore: CardStore,
    private teamService: TeamService
  ) { }

  public shuffleDeck(): void {
    this.deck$.pipe(
      first(),
      tap((deck: Card[]) =>
        deck
          .map((card: Card) => ({ card, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ card }) => card)
      )
    ).subscribe((shuffledDeck: Card[]) => this.cardStore.set('deck', shuffledDeck))
  }

  public dealToAllPlayers(): void {
    combineLatest([
      this.deck$,
      this.teamService.players$
    ]).pipe(
      first(),
      tap(([ deck, players ]: [ Card[], Player[] ]) => {
        // not shuffled?!
        console.log("Dealing " + JSON.stringify(deck[0]) + ", " + JSON.stringify(deck[1]) + " to player " + JSON.stringify(players[0]));
      })
    ).subscribe();
  }

  getHand(): Hand {
    return null;
  }
}
