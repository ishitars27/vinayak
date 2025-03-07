// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    navigate(`/products`);
    setIsDropdownOpen(false); // Close the dropdown after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Cruising 350</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li
          className="products-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/products">Products</Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleCategoryClick("Helmets")}>Helmets           <i class="fa-solid fa-helmet-un"></i></li>
              <li onClick={() => handleCategoryClick("Riding Gears")}>Riding Gears       <i class="fa-solid fa-person-biking"></i></li>
              <li onClick={() => handleCategoryClick("Bike Accessories")}>Bike Accessories            <i class="fa-solid fa-motorcycle"></i></li>
              <li onClick={() => handleCategoryClick("Visors")}>Visors              <i class="fa-solid fa-helmet-safety"></i></li>
            </ul>
          )}
        </li>
        <li><Link to="/ordertracking">Track Order</Link></li>
        <li><Link to="/cart"><FaShoppingCart /></Link></li>
        <li><Link to="/auth"><FaUser /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;