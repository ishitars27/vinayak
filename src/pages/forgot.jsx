import React, { useState } from "react";
import "../styles/forgot.css";
import { div } from "three/src/nodes/TSL.js";

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Hide form and show success message
    };

    return (
        <div id="forgot-body">
        <div className="forgot-container">
            {submitted ? (
                <h3 className="success-message">
                    A password reset link has successfully been sent to <span>{email}</span>.
                </h3>
            ) : (
                <>
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Send Reset Link</button>
                    </form>
                </>
            )}
        </div>
        </div>
    );
};

export default Forgot;
