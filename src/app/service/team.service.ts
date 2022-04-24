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
      tap((players: Player[]) => players[playerIndex].addToHand(cards))
    ).subscribe();
  }

  public getPlayer(playerIndex: number): Observable<Player> {
    return this.players$.pipe(
      map((players: Player[]) => players[playerIndex])
    );
  }

  private setPlayer(playerIndex: number, player: Player): void {
    const teamIndex = playerIndex % 2;
    const playerInTeamIndex = Math.floor(playerIndex / 2);

    this.teamStore.select('teams').pipe(
      first(),
      tap((teams: Team[]) => {
        teams[playerIndex % 2].setPlayer(Math.floor(playerIndex / 2), player);
      })
    ).subscribe((teams: Team[]) => this.teamStore.set('teams', teams))
  }
}
