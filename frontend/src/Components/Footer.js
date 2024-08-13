// Footer component
import React from "react";
import './Footer.css';
const Footer = () => (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla purus at ante pulvinar, ac dictum metus tristique. Duis
            ac justo aliquet, blandit metus nec, volutpat ex.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Recipe App</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
  export default Footer;
  