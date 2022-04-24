import { SortOrder } from "../enum/sort-order.enum";
import { Card } from "./card.model";

export class Hand {

    public cards: Card[] = [];

    addCards(cards: Card[]): void {
        this.cards = this.cards.concat(cards);
    }

    sort(sortOrder: SortOrder = SortOrder.HighToLow): void {

    }
}