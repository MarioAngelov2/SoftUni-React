import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import GameDetails from "./components/GameDetails";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
      </main>

      <WelcomeWorld />

      <Login />

      <Register />

      <CreatePage />

      <EditPage />

      <GameDetails />

      <Catalog />
    </div>
  );
}

export default App;
