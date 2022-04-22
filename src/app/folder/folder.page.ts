import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../service/game-manager.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private gameManagerService: GameManagerService
  ) { }

  ngOnInit(): void {}

  begin(): void {
    this.gameManagerService.begin();
  }

}
