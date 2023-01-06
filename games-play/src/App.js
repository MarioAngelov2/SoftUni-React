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
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          <Route path='/' exact component={WelcomeWorld} />
          <Route path='/home' exact component={WelcomeWorld} />
          <Route path='/games' exact component={Catalog} />
          <Route path='/create-game' component={CreatePage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/games/:gameId' component={GameDetails} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
