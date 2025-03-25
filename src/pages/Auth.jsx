import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../styles/auth.css";
import avatar from "../assets/avatar.png"; // Ensure the avatar image is in the correct path

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      {submitted ? (
        <h2 className="success-message">You have successfully logged in</h2>
      ) : (
        <>
          <div className="avatar">
            <img src={avatar} alt="User Avatar" />
          </div>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          {error && <p className="error-message">{error}</p>}
          <h3>Welcome back</h3>

          <form className="login-form" onSubmit={handleAuth}>
            <div className="textbox">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="material-symbols-outlined">email</span>
            </div>
            <div className="textbox">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="material-symbols-outlined">lock</span>
            </div>
            <button type="submit">{isLogin ? "LOGIN" : "SIGN UP"}</button>
            <a href="/forgot-password">Forgot your credentials?</a>
          </form>
        </>
      )}
    </div>
  );
};

export default Auth;
