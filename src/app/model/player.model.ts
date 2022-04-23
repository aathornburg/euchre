import { Card } from "./card.model";
import { Hand } from "./hand.model";
import { Trick } from "./trick.model";

export class Player {

    private hand: Hand;
    private tricksWon: Trick;

    public addToHand(cards: Card[]): void {
        this.hand.addCards(cards);
    }
}