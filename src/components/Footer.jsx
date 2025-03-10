import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Cruising 350</h2>
          <p>Your one-stop destination for premium bike accessories.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About Us</Link> {/* Updated Link */}
          <Link to="/contactus">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/cruising350/">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Cruising 350. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
