import { Component, OnInit } from '@angular/core';
import { Deck } from './deck';
import { Player } from './player';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    providers: [CardService]
})
export class GameComponent implements OnInit {

    numberOfCardsToDeal = 10;
    deck: Deck;
    numberOfPlayers: number;
    players = new Array<Player>();
    playerTurn = 0;
    leadPlayer = 0;
    trump: Card;
    yourSelection: Card;
    leadCard: Card;
    playedCards: Array<Card> = [null, null, null, null];
    turnOver = false;

    constructor(private cardService: CardService) {

    }

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

        console.log(this.playerTurn);
        this.startComputerTurns();
    }

    startComputerTurns() {
        if (this.playerTurn !== 0) {
            this.leadCard = this.players[this.playerTurn].leadCard();
            this.playedCards[this.playerTurn] = this.leadCard;
            this.playerTurn = (this.playerTurn + 1) % this.players.length;

            while (this.playerTurn !== 0) {
                this.playedCards[this.playerTurn] = this.players[this.playerTurn].playCard(this.leadCard.suit);
                this.playerTurn = (this.playerTurn + 1) % this.players.length;
            }
        }
    }

    finishComputerTurns() {
        while (this.playerTurn !== this.leadPlayer) {
            this.playedCards[this.playerTurn] = this.players[this.playerTurn].playCard(this.leadCard.suit);
            this.playerTurn = (this.playerTurn + 1) % this.players.length;
        }

        this.leadPlayer = this.cardService.determineWinner(this.playedCards, this.leadCard.suit, this.trump.suit);
        this.playerTurn = this.leadPlayer;
        this.turnOver = true;
        this.leadCard = null;
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

    clicked(selectedCard: Card) {
        if (this.playerTurn === 0) {
            let leadSuit = null;
            if (this.leadCard) {
                leadSuit = this.leadCard.suit;
            }


            this.playedCards[0] = this.players[0].playUserSelectedCard(selectedCard, leadSuit);

            if (this.playedCards[0]) {
                if (!this.leadCard) {
                    this.leadCard = this.playedCards[0];
                }

                this.playerTurn = 1;
                this.finishComputerTurns();
            }

        }
    }

    continue() {
        this.turnOver = false;
        this.playedCards = [null, null, null, null];

        if (this.players[0].hand.length > 0) {
            this.startComputerTurns();
        }
        else {
            this.numberOfCardsToDeal -= 1;
            this.startHand();
        }
    }
}
