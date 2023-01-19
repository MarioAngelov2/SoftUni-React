import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import MyPets from "./components/MyPets";
import Footer from "./components/Footer";
import * as authService from './services/authService'

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''})

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })
  }, []);

  const onLogin = (username) => {

    setUserInfo({
      isAuthenticated: true,
      user: username,
    })
  }

  return (
    <div className="App">
      <div id="container">
        <Header {...userInfo} />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
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