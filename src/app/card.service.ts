import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable()
export class CardService {
    determineWinner(playedCards: Array<Card>, leadSuit: string, trump: string) {
        let winningCard: number;

        for (let i = 0; i < playedCards.length; i++) {
            if (trump === playedCards[i].suit) {
                if (!winningCard || playedCards[winningCard].value < playedCards[i].value) {
                    winningCard = i;
                }
            }
        }

        if (typeof winningCard === 'undefined') {
            for (let i = 0; i < playedCards.length; i++) {
                if (leadSuit === playedCards[i].suit) {
                    if (typeof winningCard === 'undefined' || playedCards[winningCard].value < playedCards[i].value) {
                        winningCard = 1;
                    }
                }
            }
        }

        return winningCard;
    }
}
