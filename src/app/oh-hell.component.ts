import { Component, OnInit } from '@angular/core';
import { Deck } from './deck';
import { Player } from './player';

@Component( {
    selector: 'app-oh-hell',
    templateUrl: './oh-hell.component.html',
    styleUrls: [ './oh-hell.component.css' ]
})
export class OhHellComponent implements OnInit {

    numberOfCardsToDeal = 10;
    deck = new Deck();
    numberOfPlayers: number;
    players = new Array<Player>();

    ngOnInit() {
        const d = new Deck();

        this.players.push(new Player('You'));
        this.players.push(new Player('Tom'));
        this.players.push(new Player('Sandra'));
        this.players.push(new Player('Mike'));

        this.dealHand();
    }

    dealHand() {
        for (let i = 0; i < this.numberOfCardsToDeal; i++) {
            for (let j = 0; j < this.players.length; j++) {
                this.players[j].hand.push(this.deck.deck.pop());
            }
        }
    }

    clicked() {
        console.log('clicked');
    }
}
