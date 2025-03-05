import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../styles/auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [accountCreation, setAccountCreation] = useState(false); // ✅ Fixed state name

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged In:", userCredential.user);
        setLoggedin(true); // ✅ Set logged-in state
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User Signed Up:", userCredential.user);
        setAccountCreation(true); // ✅ Set account creation state
      }
    } catch (err) {
      console.error("Firebase Auth Error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      {/* ✅ First check if an account was created */}
      {accountCreation ? (
        <h1>Account Created Successfully</h1>
      ) : loggedin ? ( // ✅ Then check if the user is logged in
       <div>
        <h1>Logged in successfully</h1>
       </div>
      ) : (
        <div>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleAuth}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          {error && <p className="auth-error">{error}</p>}
          <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
