import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStore } from '../store/game.store';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public lastDealId$: Observable<number> = this.gameStore.select('lastDealId');

  constructor(
    private gameStore: GameStore
  ) { }
}
