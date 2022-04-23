import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Card } from '../model/card.model';
import { Player } from '../model/player.model';
import { Team } from '../model/team.model';
import { TeamStore } from '../store/team.store';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public players$: Observable<[Player, Player, Player, Player]> = this.teamStore.select('teams').pipe(
    map((teams: Team[]) => {
      return [
        teams[0].getPlayer(0),
        teams[1].getPlayer(0),
        teams[0].getPlayer(1),
        teams[1].getPlayer(1)
      ];
    })
  );

  constructor(
    private teamStore: TeamStore
  ) { }

  public dealToPlayer(playerIndex: number, cards: Card[]): void {
    this.players$.pipe(
      first(),
      map((players: Player[]) => players[playerIndex]),
      tap((player: Player) => player.addToHand(cards))
    ).subscribe((player: Player) => {
      this.setPlayer(playerIndex, player)
    });
  }

  public getPlayer(playerIndex: number): Observable<Player> {
    return this.players$.pipe(
      map((players: Player[]) => players[playerIndex])
    );
  }

  private setPlayer(playerIndex: number, player: Player): void {
    this.teamStore.select('teams').pipe(
      first(),
      map((teams: Team[]) => {
        // teams[playerIndex % 2].getPlayer(Math.floor(playerIndex / 2)) = player;
        return teams;
      })
    ).subscribe((teams: Team[]) => this.teamStore.set('teams', teams))
  }
}
