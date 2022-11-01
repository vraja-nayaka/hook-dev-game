import clsx from "clsx";
import { FC } from "react";
import { ManaGem } from "./mana-gem";

type ManaPoolProps = {
  count: number;
  countAvailable: number;
  className?: string;
};

export const ManaPool: FC<ManaPoolProps> = ({
  count,
  countAvailable,
  className,
}) => {
  const emptyCount = countAvailable - count;

  return (
    <div
      className={clsx(
        "flex items-center bg-slate-500 w-96 m-2 p-1 rounded-xl border-4",
        className
      )}
    >
      <span className="w-12 text-slate-100 p-1 select-none">
        {count} / {countAvailable}
      </span>
      {[...Array(count)].map((_, index) => (
        <ManaGem key={index} className="mr-1" />
      ))}
      {[...Array(emptyCount)].map((_, index) => (
        <ManaGem key={index} className="mr-1 filter grayscale" />
      ))}
    </div>
  );
};
