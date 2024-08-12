// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MT Booking</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Destinations</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
        <li>
          <Link to="#">News</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>

      <div className="user-info">
        {user ? (
          <>
            <span className="welcome-message">Hi, {user.username}</span>
            <Link to="/profile" className="profile-link">My Profile</Link>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-button">Sign Up</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
