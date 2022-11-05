import { myHand, opponentHand } from "../../store/game/hand";
import { myField, opponentField } from "../../store/game/field";
import { gameCardsDictionary } from "../../store/game/cards";
import { Card, Deck } from "../../types/card";
import { addCard } from "../cards";
import { CardHolder } from "../../types/card";
import { turns } from "../../store/game/turns";

const addInitCards = (cards: Card[], deck: Deck, cardHolder: CardHolder) => {
  deck.cardIds.forEach((cardId) => {
    const card = cards.find((item) => {
      return item.id === String(cardId);
    });
    if (card) {
      gameCardsDictionary.api.add(card);
      addCard(cardHolder, gameCardsDictionary.getLast());
    }
  });
};

type StartGameParams = {
  cards: Card[];
  myDeck: Deck;
  opponentsDeck: Deck;
};

export const startGame = (params: StartGameParams) => {
  const { cards, myDeck, opponentsDeck } = params;
  addInitCards(cards, myDeck, CardHolder.myHand);
  addInitCards(cards, opponentsDeck, CardHolder.opponentHand);
  turns.api.init({ isMy: true });
};

export const clearGame = () => {
  myField.api.set([]);
  myHand.api.set([]);
  opponentField.api.set([]);
  opponentHand.api.set([]);
};
