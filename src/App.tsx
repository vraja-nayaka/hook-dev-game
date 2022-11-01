import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import './App.css';
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

const App = () => {
  return (
      <div>
        <Routes>
          <Route
            path={routes.root}
            element={<Home />}
          />
          <Route
            path={routes.game}
            element={<Game />}
          />
          {/* <Route
            path={routes.auth}
            element={<Auth currentUser={currentUser} />}
          />
          <Route
            path={routes.registration}
            element={<Registration currentUser={currentUser} />}
          /> */}
        </Routes>
      </div>
  );
}

export default App;
