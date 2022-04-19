import { Suit } from "../enum/suit.enum";
import { Value } from "../enum/value.enum";

export interface Card {
    suit: Suit
    value: Value
}