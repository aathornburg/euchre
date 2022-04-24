import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../service/game-manager.service';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  // The player in control has index 0
  public player$ = this.teamService.getPlayer(0);

  public player1$ = this.teamService.getPlayer(1);
  public player2$ = this.teamService.getPlayer(2);
  public player3$ = this.teamService.getPlayer(3);

  constructor(
    private gameManagerService: GameManagerService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {}

  begin(): void {
    this.gameManagerService.begin();
  }

}
