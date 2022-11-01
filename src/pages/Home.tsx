import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MenuLayout } from "../components/layouts/MenuLayout";
import { routes } from "../routes";

type Props = {};

export const Home: FC<Props> = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    navigate(routes.game);
  };

  return (
    <MenuLayout>
      <div>
        <div className="button-container">
          <span className="mask">Start</span>
          <button type="button" name="Hover" onClick={onStartClick}>
            Start
          </button>
        </div>
      </div>
    </MenuLayout>
  );
};
