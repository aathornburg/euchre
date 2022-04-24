import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Card } from '../model/card.model';
import { Hand } from '../model/hand.model';
import { Player } from '../model/player.model';
import { CardStore } from '../store/card.store';
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
      map((deck: Card[]) =>
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
        for (let dealRound = 0; dealRound < 2; dealRound++) {
          players.forEach((player: Player, index: number) => {
            let dealing3Cards = dealRound % 2 === index % 2;
            let cardsToDeal: Card[] = deck.splice(0, dealing3Cards ? 3 : 2);
            this.teamService.dealToPlayer(index, cardsToDeal);
            setTimeout(() => { console.log('test'); }, 2000);
          })
        }
      })
    ).subscribe();
  }

  getHand(): Hand {
    return null;
  }
}
