import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(Object.values(parsedCart)); // Convert object to array
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingCart size={50} />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          <button
            onClick={() => {
              console.log("Navigating to checkout");
              navigate("/Checkout");
            }}
          >
            Checkout <FaShoppingCart />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
