import { Component, OnInit } from '@angular/core';
import { Deck } from './deck';
import { Player } from './player';
import { Card } from './card';

@Component({
    selector: 'app-oh-hell',
    templateUrl: './oh-hell.component.html',
    styleUrls: ['./oh-hell.component.css']
})
export class OhHellComponent implements OnInit {

    numberOfCardsToDeal = 10;
    deck = new Deck();
    numberOfPlayers: number;
    players = new Array<Player>();
    trump: Card;
    yourSelection: Card;

    ngOnInit() {
        const d = new Deck();

        this.players.push(new Player('You'));
        this.players.push(new Player('Tom'));
        this.players.push(new Player('Sandra'));
        this.players.push(new Player('Mike'));

        //this.dealHand();
        this.playGame();
    }

    playGame() {
        let dealerIndex = Math.floor(Math.random() * this.numberOfPlayers);

        while (this.numberOfCardsToDeal > 0) {
            this.dealHand();

            this.playHand(dealerIndex);

            dealerIndex = (dealerIndex + 1) % this.numberOfPlayers;
            this.numberOfCardsToDeal -= 1;
            //this.clearHands();
        }
    }

    playHand(dealerIndex: number) {
        this.yourSelection = null;

        if (dealerIndex > 0) {
            let leadCard = this.players[dealerIndex].leadCard();

            for (let i = dealerIndex + 1; i < this.numberOfPlayers; i++) {
                this.players[i].playCard(leadCard.suit);
            }
        }

        alert('Your turn');

        while (!this.yourSelection) {
            
        }

        let index = this.players[0].hand.indexOf(this.yourSelection);
        this.players[0].hand.splice(index, index + 1);


        for (let i = 1; i < dealerIndex; i++) {

        }

    }

    dealHand() {
        for (let i = 0; i < this.numberOfCardsToDeal; i++) {
            for (let j = 0; j < this.players.length; j++) {
                this.players[j].hand.push(this.deck.deck.pop());
            }
        }

        this.trump = this.deck.deck.pop();
    }

    clearHands() {
        this.players.forEach(player => {
            player.hand = new Array<Card>();
        });
    }

    clicked(card: Card) {
        console.log('clicked');
        console.log(card);

        this.yourSelection = card;
    }
}
