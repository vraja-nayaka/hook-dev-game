import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const MenuLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="menu-layout">
      <div className="menu-layout-desc">
      {/* <div className="menu-layout-action"> */}
        {children}
        {/* </div> */}
        </div>
    </div>
  );
};
