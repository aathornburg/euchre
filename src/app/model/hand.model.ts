import { SortOrder } from "../enum/sort-order.enum";
import { Card } from "./card.model";

export class Hand {
    cards: Card[]

    sort(sortOrder: SortOrder = SortOrder.HighToLow): void {
        
    }
}