// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Calendarselect from "./Components/Calendarselect";
import Weather from "./Components/Weather";
import Choose from "./Components/Choose";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // حالة لتتبع معلومات المستخدم

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUser={setUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calendar" element={<Calendarselect />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/choose" element={<Choose />} />

          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
