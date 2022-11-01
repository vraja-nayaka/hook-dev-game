import { DraggableLocation } from "react-beautiful-dnd";
import { CardHoldersMap, cardHoldersStoreMap } from "../../domen/cards";
import { CardHolder, GameCard } from "../../types/card";

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;

type ReorderQuoteMapArgs = {
  cardHoldersMap: CardHoldersMap;
  source: DraggableLocation;
  destination: DraggableLocation;
};

export const reorderCardsMap = ({
  cardHoldersMap,
  source,
  destination,
}: ReorderQuoteMapArgs): void => {
  const current: GameCard[] = [...cardHoldersMap[source.droppableId as CardHolder]];
  const next: GameCard[] = [...cardHoldersMap[destination.droppableId as CardHolder]];
  const target: GameCard = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered: GameCard[] = reorder(
      current,
      source.index,
      destination.index
    );

    cardHoldersStoreMap[source.droppableId as CardHolder].api.set(reordered);
  } else {
    // moving to different list

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);

    cardHoldersStoreMap[source.droppableId as CardHolder].api.set(current);
    cardHoldersStoreMap[destination.droppableId as CardHolder].api.set(next);
  }
};
