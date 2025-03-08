import React, { useState } from "react";
import "../styles/orderTracking.css";
import Footer from "../components/Footer";

const OrderTracking = () => {
    const [trackingId, setTrackingId] = useState("");
    const [orderStatus, setOrderStatus] = useState(null);

    const trackOrder = (e) => {
        e.preventDefault();

        // Simulated tracking response
        const fakeStatus = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
        const randomStatus = fakeStatus[Math.floor(Math.random() * fakeStatus.length)];

        setOrderStatus(randomStatus);
    };

    return (
        <div className="order-tracking-container">
            <h2>Track Your Order</h2>
            <form onSubmit={trackOrder}>
                <input
                    type="text"
                    placeholder="Enter Tracking ID"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    required
                />
                <button type="submit">Track Order</button>
                <h1 id="hhrr">Cruising 350</h1>
            </form>
            {orderStatus && <p className="order-status">Status: {orderStatus}</p>}

        </div>
    );
};

export default OrderTracking;