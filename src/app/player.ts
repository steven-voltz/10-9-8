import { Card } from './card';

export class Player {
    name: string;
    hand: Array<Card>;

    constructor(name: string) {
        this.name = name;
        this.hand = new Array<Card>();
    }

    leadCard() {
        return this.hand.pop();
    }

    playCard(leadSuit: string) {
        let index = 0;
        let foundCard = false;

        while (index < this.hand.length && !foundCard) {
            if (this.hand[index].suit === leadSuit) {
                foundCard = true;
            }

            index++;
        }

        return this.hand.splice(index - 1, 1)[0];
    }

    playUserSelectedCard(card: Card, leadSuit: string) {

        let validSelection = true;

        debugger;

        if (leadSuit && card.suit !== leadSuit) {
            this.hand.forEach(c => {
                if (c.suit === leadSuit) {
                    validSelection = false;
                }
            });
        }
        
        if (validSelection) {
            const index = this.hand.indexOf(card);

            return this.hand.splice(index, 1)[0];
        }
        else {
            return null;
        }   
    }
}
