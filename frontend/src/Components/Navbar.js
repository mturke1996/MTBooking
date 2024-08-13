import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Calendarselect from "./Calendarselect";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar ">
      <div className="navbar-logo">
        <Link to="/">MT Booking</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/choose">why us</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>

      <div className="user-info">
        {user ? (
          <>
            <span className="welcome-message">
            <i class="fa-solid fa-user fa-beat-fade"></i>
              Hi, {user.username}
            </span>
            <Link to="/profile" className="profile-link">
              My Profile
            </Link>
            <Link to="/myBokking" className="profile-link">
              My Booking
            </Link>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;
