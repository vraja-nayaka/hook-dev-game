import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { CardList } from "./card-list";
import { reorderCardsMap } from "./reorder";
import { useCardHoldersMap } from "../../domen/cards";
import { CardHolder } from "../../types/card";
import { GameLayout } from "../layouts/GameLayout";
import { sendNewMessage } from "../../services/socket-io";

export const CardsApp = () => {
  const { cardHoldersMap } = useCardHoldersMap();

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    sendNewMessage({
      type: "reorder",
      data: {
        source: result.source,
        destination: result.destination,
      },
    });
    reorderCardsMap({
      cardHoldersMap,
      source: result.source,
      destination: result.destination,
    });
  };

  const cardHoldersElementsMap = Object.keys(cardHoldersMap).reduce(
    (acc, key) => {
      acc[key as CardHolder] = (
        <CardList
          key={key}
          listId={key as CardHolder}
          listType="CARD"
          cards={cardHoldersMap[key as CardHolder]}
        />
      );
      return acc;
    },
    {} as Record<CardHolder, JSX.Element>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <GameLayout {...cardHoldersElementsMap} />
    </DragDropContext>
  );
};
