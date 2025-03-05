// Navbar.jsx
import ThemeToggle from "./ThemeToggle";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Cruising 350</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/ordertracking">Track Order</Link></li>
        <li><Link to="/cart"><FaShoppingCart /></Link></li>
        <li><Link to="/auth"><FaUser /></Link></li>
       
      </ul>
     
    </nav>
  );
};

export default Navbar;