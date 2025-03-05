
// Checkout.jsx
import React, { useState } from "react";
import "../styles/checkout.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FcOk } from "react-icons/fc";
const Checkout = () => {
  const [formData, setFormData] = useState({ name: "", address: "", cardNumber: "" });
const [submitted,setSubmitted]=useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitC = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setSubmitted(true)
  };

  return (
    <div className="checkout-container">
     <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmitC}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form></div>
    </div>
  );
};

export default Checkout;