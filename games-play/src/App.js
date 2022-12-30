import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import GameDetails from "./components/GameDetails";
import Catalog from "./components/Catalog";



function App() {
  const routes = {
    '/home': WelcomeWorld,
    '/games': Catalog,
    '/create-game': CreatePage
  }

  return (
    <div id="box">
      <Header />

      <main id="main-content">
      </main>

      <WelcomeWorld />

    </div>
  );
}

export default App;
