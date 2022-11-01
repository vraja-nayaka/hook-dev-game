import clsx from "clsx";
import { FC } from "react";

type ManaGemProps = {
  count?: number;
  className?: string;
};

export const ManaGem: FC<ManaGemProps> = ({ count, className }) => {
  return (
    <div
      className={clsx(
        "relative w-8 h-8 text-center mana-icon mana-icon-double",
        className
      )}
    >
      <div className="absolute w-full mt-1 z-10">{count}</div>
    </div>
  );
};
