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

        return this.hand.splice(index - 1, index);
    }

}
