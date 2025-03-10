import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderTracking from "./pages/ordertracking.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import ThemeToggle from "./components/themeToggle";
import ARMode from "./pages/ARMode.jsx";
import Brands from "./components/brands.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/products.css";
import "./styles/cart.css";
import "./styles/checkout.css";
import "./styles/orderTracking.css";
import "./styles/auth.css";
import "./styles/ProductDetail.css";
import ContactUs from "./pages/contactus.jsx";

function App() {
  return (
    <ThemeProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ar-mode" element={<ARMode />} />
          <Route path="/about" element={<Aboutus />} /> {/* Added About Us Route */}
          <Route path="/brands" element={<Brands />} /> {/* Added Brands Route */}
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>

        <ThemeToggle />
         {/* Footer should be placed after Routes */}

    </ThemeProvider>
  );
}

export default App;
