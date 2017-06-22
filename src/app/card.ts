export class Card {
    value: number;
    suit: string;
    displayChar: string;

    constructor(value: number, suit: string, displayChar: string) {
        this.value = value;
        this.suit = suit;
        this.displayChar = displayChar;
    }
}
