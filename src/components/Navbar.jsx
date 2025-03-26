import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("open");
  };

  return (
<nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Cruising 350</Link>
      </div>

      {/* Burger menu for mobile */}
      <button onClick={toggleMenu} className="burger"></button>

      {/* Navbar links */}
      <div className={`dropdowns ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="button">Home</Link>

        {/* Dropdown Menu for Products */}
        <div className="dropdown">
          <Link to="/products" className="button no-border">
            Products <i class="fa-solid fa-caret-down"></i>
          </Link>
          <div className="dropdown-menu">
            <Link to="/products">Helmets</Link>
            <Link to="/products">Riding Gears</Link>
            <Link to="/products">Bike Accessories</Link>
            <Link to="/products">Visors</Link>
          </div>
        </div>

        <Link to="/ordertracking" className="button">Track Order</Link>
        <Link to="/cart" className="button"><FaShoppingCart /></Link>
        <Link to="/auth" className="button"><FaUser /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
