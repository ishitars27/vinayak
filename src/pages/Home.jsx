// Home.jsx
//import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Cruising 350</h1>
        <p>Discover premium bike accessories for your ultimate ride.</p>
        <a href="/products" className="shop-now">Shop Now</a>
      </header>
      <section className="features">
        <div className="feature-box">
          <h3>High-Quality Accessories</h3>
          <p>Get the best gear to enhance your riding experience.</p>
        </div>
        <div className="feature-box">
          <h3>Fast Shipping</h3>
          <p>We ensure quick delivery across the country.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Payments</h3>
          <p>Protected transactions with Razorpay integration.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

