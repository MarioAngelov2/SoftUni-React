import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import MyPets from "./components/MyPets";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
