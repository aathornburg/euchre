import { Injectable } from "@angular/core";
import { Suit } from "../enum/suit.enum";
import { Card } from "../model/card.model";
import { Store } from "./store";

export class GameState {
    lastDealId: number = 0;
    trumpSuit: Suit = null;
}

@Injectable({
    providedIn: 'root'
})
export class GameStore extends Store {
    constructor() {
        super(new GameState());
    }
}