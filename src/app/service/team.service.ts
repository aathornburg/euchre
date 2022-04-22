import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
}
