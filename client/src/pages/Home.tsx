import { getAuth, signOut } from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MenuLayout } from "../components/layouts/MenuLayout";
import { routes } from "../routes";

type Props = {};

export const Home: FC<Props> = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const onStartClick = () => {
    navigate(routes.game);
  };
  const onLogout = () => {
    signOut(auth);
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
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </MenuLayout>
  );
};
