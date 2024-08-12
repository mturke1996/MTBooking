// src/components/Navbar.js
import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">MT Booking</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div>
        <a href="#" className="login-button">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
