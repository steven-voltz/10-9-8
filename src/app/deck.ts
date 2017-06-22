import { Card } from './card';

export class Deck {
    deck: Array<Card>;

    constructor() {
        this.deck = this.createDeck();

        this.shuffle();
    }

    private createDeck(): Array<Card> {
        let deck = new Array<Card>();

        deck = deck.concat(this.createCardsForSuit('Clubs'));
        deck = deck.concat(this.createCardsForSuit('Spades'));
        deck = deck.concat(this.createCardsForSuit('Hearts'));
        deck = deck.concat(this.createCardsForSuit('Diamonds'));

        return deck;
    }

    private createCardsForSuit(suit: string): Array<Card> {
        const cards = new Array<Card>();

        for (let j = 2; j <= 10; j++) {
            cards.push(new Card(j, suit, j.toString()));
        }

        cards.push(new Card(11, suit, 'J'));
        cards.push(new Card(12, suit, 'Q'));
        cards.push(new Card(13, suit, 'K'));
        cards.push(new Card(14, suit, 'A'));

        return cards;
    }

    shuffle() {
        const shuffledDeck = new Array<Card>();

        while (this.deck.length > 0) {

            const index = Math.random() * this.deck.length;

            shuffledDeck.push(this.deck.splice(index, 1)[0]);
        }

        this.deck = shuffledDeck;
    }
}
