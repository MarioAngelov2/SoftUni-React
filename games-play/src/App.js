import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import GameDetails from "./components/GameDetails";
import Catalog from "./components/GameCatalog/Catalog";
import ErrorPage from "./components/ErrorPage";
import { useState, createElement } from "react";
import { Route } from 'react-router-dom';

function App() {
  const [page, setPage] = useState("/home");

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      "home": <WelcomeWorld />,
      "games": <Catalog />,
      "create-game": <CreatePage />,
      "login": <Login />,
      "register": <Register />,
      "details": <GameDetails id={argument} />
    };

    return routes[rootPath]
  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        <Route path='/' exact component={WelcomeWorld} />
        <Route path='/games' component={Catalog} />
        <Route path='/create-game' component={CreatePage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </main>

    </div>
  );
}

export default App;
