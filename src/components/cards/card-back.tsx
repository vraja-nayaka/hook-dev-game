import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  type?: unknown;
};

export const CardBack = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-28 h-40 m-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-lg"
      {...props}
    ></div>
  );
});
