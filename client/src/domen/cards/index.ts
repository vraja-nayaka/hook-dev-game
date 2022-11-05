import { useStore } from "effector-react";

import { CardsStore, myHand, opponentHand } from "../../store/game/hand";
import { myField, opponentField } from "../../store/game/field";
import { CardHolder, GameCard } from "../../types/card";
import { activeCardUid } from "../../store/game/active";
import { gameCardsDictionary } from "../../store/game/cards";

export const cardHoldersStoreMap: Record<CardHolder, CardsStore> = {
  myHand,
  myField,
  opponentField,
  opponentHand,
};

export const moveCard = (
  from: CardHolder,
  to: CardHolder,
  card: GameCard,
  index: number
) => {
  cardHoldersStoreMap[from].api.removeByIndex(index);
  cardHoldersStoreMap[to].api.add(card);
};

export const addCard = (to: CardHolder, card: GameCard) => {
  return cardHoldersStoreMap[to].api.add(card);
};

export const getCard = (from: CardHolder, index: number) => {
  return cardHoldersStoreMap[from].$store.getState()[index];
};

export const useActiveCard = () => {
  const activeUid = useStore(activeCardUid.$store);
  return activeUid ? gameCardsDictionary.get(activeUid) : null;
};

export const putMyCardOnMyField = (fromIndex: number, toIndex: number) => {
  const card = getCard(CardHolder.myHand, fromIndex);

  moveCard(CardHolder.myHand, CardHolder.myField, card, fromIndex);
};

export const onCardDragStart = (event: unknown) => {
  // const { active } = event;
  // const { id } = active;
  // activeCardUid.api.set(typeof id === "number" ? id : null);
};

export const getCardHoldersMap = () => {
  const cardHoldersMap = {
    opponentHand: opponentHand.$store.getState(),
    opponentField: opponentField.$store.getState(),
    myField: myField.$store.getState(),
    myHand: myHand.$store.getState(),
  };

  return cardHoldersMap;
};

export const useCardHoldersMap = () => {
  const myFieldStore = useStore(myField.$store);
  const myHandStore = useStore(myHand.$store);
  const opponentFieldStore = useStore(opponentField.$store);
  const opponentHandStore = useStore(opponentHand.$store);

  const cardHoldersMap = {
    opponentHand: opponentHandStore,
    opponentField: opponentFieldStore,
    myField: myFieldStore,
    myHand: myHandStore,
  };

  return { cardHoldersMap };
};

export type CardHoldersMap = ReturnType<
  typeof useCardHoldersMap
>["cardHoldersMap"];
