import clsx from "clsx";
import { FC, useEffect, useRef } from "react";
import CircleType from "circletype";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Card } from "../../types/card";
import { ManaGem } from "../mana/mana-gem";
import jsImg from "./static/media/logo/js.png";
import { CardBack } from "./card-back";

type Props = {
  card: Card;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  listId: string;
  isBack?: boolean;
};

function getStyle(
  style: any,
  snapshot: DraggableStateSnapshot,
  listId: string
) {
  if (!snapshot.isDropAnimating || !snapshot.dropAnimation) {
    return style;
  }
  const { moveTo, curve, duration } = snapshot.dropAnimation;

  const isMoveInSameList =
    snapshot.draggingOver === null || snapshot.draggingOver === listId;
  const fixingOffset = isMoveInSameList ? 0 : 64;
  const translate = `translate(${moveTo.x - fixingOffset}px, ${moveTo.y}px)`;
  // add a bit of turn for fun
  // const rotate = "rotate(1turn)";
  return {
    ...style,
    transform: `${translate}`,
    transition: `all ${curve} ${duration}s`,
  };
}

export const CardItem: FC<Props> = (props) => {
  const { card, provided, snapshot, listId, isBack } = props;

  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      new CircleType(titleRef.current).dir(-1).radius(380);
    }
  }, [titleRef]);

  if (isBack) {
    return (
      <CardBack
        ref={(ref) => provided.innerRef(ref)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getStyle(provided.draggableProps.style, snapshot, listId)}
      />
    );
  }

  return (
    <div
      ref={(ref) => provided.innerRef(ref)}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided.draggableProps.style, snapshot, listId)}
      className={clsx("w-28 h-40 m-2 bg-orange-100 rounded-lg relative", {
        "drop-shadow-xl": snapshot.isDragging && !snapshot.isDropAnimating,
      })}
    >
      <img
        alt="js"
        src={jsImg}
        className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-2 border-slate-400"
      />
      <div
        ref={titleRef}
        className="absolute bottom-7 text-center w-full h-5 bg-slate-400 text-slate-50 font-semibold text-xs font-serif tracking-tighter leading-none p-1"
      >
        {card.title}
      </div>

      <div className="absolute -top-2 -right-2">
        <ManaGem count={card.cost} />
      </div>
    </div>
  );
};
