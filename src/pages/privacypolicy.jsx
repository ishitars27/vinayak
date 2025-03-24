import React from "react";
import "../styles/privacyPolicy.css"; // Create a corresponding CSS file
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [13-03-2025]</p>

      <h2>1. Introduction</h2>
      <p>
        At <strong>Cruising 350</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you visit our website.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email, phone number, and shipping details.</li>
        <li><strong>Automated Information:</strong> IP address, browser type, pages visited, and device information.</li>
        <li><strong>Chatbot Data:</strong> Interactions via Tidio Chatbot.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process orders and payments.</li>
        <li>Provide customer support via email and chatbot.</li>
        <li>Send updates and promotional emails (if subscribed).</li>
        <li>Improve website functionality and chatbot experience.</li>
      </ul>

      <h2>4. Sharing Your Data</h2>
      <p>
        We do <strong>not</strong> sell your personal data. However, we may share it with:
      </p>
      <ul>
        <li>Third-party services like payment gateways and shipping partners.</li>
        <li>Tidio Chatbot for customer interactions (<a href="https://www.tidio.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Tidio Privacy Policy</a>).</li>
        <li>Legal authorities when required by law.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We take appropriate security measures, including:</p>
      <ul>
        <li>SSL encryption for secure transactions.</li>
        <li>Secure payment gateways.</li>
        <li>Regular monitoring for unauthorized access.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your data.</li>
        <li>Opt-out of marketing emails.</li>
        <li>Disable cookies via browser settings.</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions, reach out to us:
        <br />
        📧 Email: <a href="mailto:vinayaksinghforyou@gmail.com.com">support@cruising350.com</a>
        <br />
        📞 Phone: +91 8287764234
      </p>

    
    </div>
  );
};
export default PrivacyPolicy;