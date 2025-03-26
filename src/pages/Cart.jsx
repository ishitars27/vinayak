import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(
            parsedCart.map(item => ({
              id: item.id || "N/A", // ✅ Default ID
              name: item.name || "Unknown Product", // ✅ Handle missing names
              price: item.price || 0, // ✅ Handle missing price
              quantity: item.quantity || 1, // ✅ Handle missing quantity
              image: item.image || "https://via.placeholder.com/100", // ✅ Default Image
            }))
          );
        } else {
          console.error("Cart data is not an array!");
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  // ✅ Update Local Storage
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // ✅ Increase or Decrease Quantity
  const updateQuantity = (id, amount) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    updateLocalStorage(updatedCart);
  };

  // ✅ Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updatedCart);
  };

  // ✅ Calculate Total Price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingCart size={50} />
          <p>Your cart is empty. <i className="fa-solid fa-face-sad-tear fa-3x"></i></p>
        </div>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-name" style={{color:"whitesmoke"}
                }>{item.name}</span>
                <span className="cart-item-price">₹{item.price}</span>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)} style={{color:"gray"}}>-</button>
                  <span style={{color:"whitesmoke"}}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}   >+</button>
                </div>
                <button onClick={() => removeItem(item.id)} className="remove-item">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* ✅ Checkout Button & Total Price */}
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={() => navigate("/checkout")}>
            Checkout <FaShoppingCart />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
