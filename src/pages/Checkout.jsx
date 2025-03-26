import React, { useState } from "react";
import "../styles/checkout.css";
import { FcOk } from "react-icons/fc";

const Checkout = () => {
  const [formData, setFormData] = useState({ name: "", address: "", cardNumber: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitC = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ✅ Clear the cart after checkout
    localStorage.removeItem("cart");
  };

  return (
    <div className="checkout-container">
      {submitted ? (
        <div className="checkout-success" style={{margin:"100px auto" ,padding:"100px auto"}}>
          <FcOk size={50} />
          <h2>Order Placed Successfully!</h2>
          <p style={{color:"white"}}>Thank you for your purchase.</p>
        </div>
      ) : (
        <div>
          <h2>Checkout</h2>
          <form onSubmit={handleSubmitC}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required />
            <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
            <button type="submit">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
