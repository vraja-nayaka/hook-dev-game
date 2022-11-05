import { Route, Routes } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { routes } from "./routes";
import "./App.css";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { useCurrentUser } from "./services/api/useCurrentUser";

const App = () => {
  const { auth, loading, profile, user } = useCurrentUser();
  console.log("🚀 ~ user", user);
  const [signInWithGoogle, , , googleError] = useSignInWithGoogle(auth);

  // if (!user) {
  //   return (
  //     <button className="centred" onClick={() => signInWithGoogle()}>
  //       Войти через Google
  //     </button>
  //   );
  // }

  return (
    <div>
      <Routes>
        <Route path={routes.root} element={<Home />} />
        <Route path={routes.game} element={<Game />} />
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
};

export default App;
