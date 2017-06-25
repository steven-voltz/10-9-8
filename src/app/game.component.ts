import { Component, OnInit } from '@angular/core';
import { Deck } from './deck';
import { Player } from './player';
import { Card } from './card';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    numberOfCardsToDeal = 10;
    deck: Deck;
    numberOfPlayers: number;
    players = new Array<Player>();
    playerTurn = 0;
    trump: Card;
    yourSelection: Card;
    leadCard: Card;
    playedCards: Array<Card> = [null, null, null, null];
    turnOver = false;

    ngOnInit() {
        this.players.push(new Player('You'));
        this.players.push(new Player('Tom'));
        this.players.push(new Player('Sandra'));
        this.players.push(new Player('Mike'));

        this.startHand();
    }

    startHand() {
        this.deck = new Deck();
        this.dealHand();
    }

    playGame() {
        let dealerIndex = Math.floor(Math.random() * this.numberOfPlayers);

        while (this.numberOfCardsToDeal > 0) {
            this.dealHand();

            debugger;
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
            setTimeout(this.tell(), 1000);
        }

        let index = this.players[0].hand.indexOf(this.yourSelection);
        this.players[0].hand.splice(index, index + 1);


        for (let i = 1; i < dealerIndex; i++) {

        }

    }

    tell() {
        console.log('Waiting');
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
