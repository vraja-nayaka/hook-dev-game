import { FC } from "react";
import clsx from "clsx";

import { CardItem } from "./card-item";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { CardHolder, GameCard } from "../../types/card";

type Props = {
  cards: GameCard[];
  listId: CardHolder;
  listType?: string;
};

export const CardList: FC<Props> = (props) => {
  const { cards, listId, listType } = props;
  const isCombineEnabled = false;
  
  const isDropDisabled = false;
  const isBack = listId === CardHolder.opponentHand;
  // const isDropDisabled = ;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={isCombineEnabled}
      isDropDisabled={isDropDisabled}
    >
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <div
          className={clsx(
            "flex flex-col p-2 my-2 select-none transition-colors rounded-md bg-blue-100",
            {
              "bg-green-200": dropSnapshot.isDraggingOver,
            }
          )}
          {...dropProvided.droppableProps}
        >
          <div className="overflow-auto">
            <div className="flex-grow">
              <div
                ref={dropProvided.innerRef}
                className="flex items-start min-h-[176px] w-fit mx-auto"
              >
                {cards.map((card: GameCard, index: number) => (
                  <Draggable
                    key={card.uid}
                    draggableId={String(card.uid)}
                    index={index}
                  >
                    {(
                      dragProvided: DraggableProvided,
                      dragSnapshot: DraggableStateSnapshot
                    ) => (
                      <CardItem
                        card={card}
                        provided={dragProvided}
                        snapshot={dragSnapshot}
                        listId={listId}
                        isBack={isBack}
                      />
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};
