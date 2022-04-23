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

  constructor(
    private gameManagerService: GameManagerService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {}

  begin(): void {
    this.gameManagerService.begin();
  }

}
