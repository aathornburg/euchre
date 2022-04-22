import { Injectable } from "@angular/core";
import { Suit } from "../enum/suit.enum";
import { Value } from "../enum/value.enum";
import { Card } from "../model/card.model";
import { Store } from "./store";

export class CardState {
    deck: Card[] = this.generateDeck();

    // Iterate over all of the Suit enum values, filtering out the ones that are numbers
    // because Object.keys returns values of 0, 1, 2, 3, Spade, Club, Heart, Diamond.
    // Then iterate over all of the card "numbers", filtering those, too,
    // then create the card of the suit and value.
    // After, we have a structure like [ [ Card, Card, Card, Card ], [ Card, Card, Card, Card ], ...]
    // so we need to reduce it down into a single array of [ Card, Card, Card, ... ]
    // TODO: Can convert this into a flatMap after changing the TS compile to es2019 or later
    private generateDeck(): any {
        return Object.keys(Suit).filter(s => isNaN(Number(s))).map((suitName: string) =>
            Object.keys(Value).filter(v => isNaN(Number(v))).map((valueName: string) => ({ suit: Suit[suitName], value: Value[valueName] }))
        ).reduce((allCards: Card[], suitArray: Card[]) => allCards.concat(suitArray));
    }
}

@Injectable({
    providedIn: 'root'
})
export class CardStore extends Store {
    constructor() {
        super(new CardState());
    }
}