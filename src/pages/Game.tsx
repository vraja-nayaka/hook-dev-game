import { FC, useEffect } from "react";
import { CardsApp } from "../components/cards/cards-app";
import { clearGame, startGame } from "../domen/game";
import { useCards } from "../services/cards";

type Props = {};

const myDeck = { cardIds: [1, 2, 2, 3] };
const opponentsDeck = { cardIds: [2, 3, 3] };

export const Game: FC<Props> = () => {
  const { cards, loading } = useCards();

  useEffect(() => {
    if (!loading) {
      startGame({ cards, myDeck, opponentsDeck });
    }
    return () => {
      clearGame();
    };
  }, [loading, cards]);

  return <CardsApp />;
};
