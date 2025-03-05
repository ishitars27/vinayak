// Footer.jsx
import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Cruising 350</h2>
          <p>Your one-stop destination for premium bike accessories.</p>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Cruising 350. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer