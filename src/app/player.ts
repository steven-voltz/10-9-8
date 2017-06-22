import { Card } from './card';

export class Player {
    name: string;
    hand: Array<Card>;

    constructor(name: string) {
        this.name = name;
        this.hand = new Array<Card>();
    }
}
