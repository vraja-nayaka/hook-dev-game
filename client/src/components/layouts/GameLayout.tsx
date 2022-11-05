import { FC } from "react";
import { CardHolder } from "../../types/card";
import { ManaPool } from "../mana/mana-pool";
import { TurnFinishButton } from "../turnFinishButton";

type Props = {
  [cardHolder in CardHolder]?: React.ReactNode;
};

export const GameLayout: FC<Props> = (props) => {
  const { myField, myHand, opponentField, opponentHand } = props;

  return (
    <div className="relative box-border bg-gradient-to-r from-sky-500 to-indigo-500 p-4 h-screen flex-col overflow-hidden">
      {/* <div className="bg-stone-300 h-1/4 flex items-center justify-center text-center"> */}
      {opponentHand}
      {opponentField}
      {myField}
      <div className="absolute -bottom-4 left-1/4 right-1/4 mx-auto">
        {myHand}
      </div>
      <div className="absolute bottom-24 right-8 bg-slate-700 w-8 h-32 m-2 rounded border-4"></div>
      <div className="absolute bottom-0 right-0">
        <ManaPool count={2} countAvailable={9} />
      </div>
      <div className="absolute bottom-1/2 right-2">
        <TurnFinishButton />
      </div>
    </div>
  );
};
