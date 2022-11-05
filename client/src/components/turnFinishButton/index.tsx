import { useStore } from "effector-react";
import { FC } from "react";
import { turns } from "../../store/game/turns";

type TurnFinishButtonProps = {};

export const TurnFinishButton: FC<TurnFinishButtonProps> = (props) => {
  const { isMy, turn } = useStore(turns.$store) || {};
  // const isDisabled = !isMy;

  const onClickHandler = () => {
    turns.api.next();
  };

  return (
    <button
      className="bg-orange-200 w-36 h-12 rounded border hover:bg-orange-300 transition-all disabled:bg-slate-200"
      // disabled={isDisabled}
      onClick={onClickHandler}
    >
      Завершить ход {turn}
    </button>
  );
};
