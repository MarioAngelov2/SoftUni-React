import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import GameDetails from "./components/GameDetails";
import Catalog from "./components/Catalog";
import ErrorPage from "./components/ErrorPage";
import { useState, createElement } from "react";

function App() {
  const [page, setPage] = useState("/home");

  const routes = {
    "/home": <WelcomeWorld />,
    "/games": <Catalog />,
    "/create-game": <CreatePage />,
    "/login": <Login />,
    "/register": <Register />
  };

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
