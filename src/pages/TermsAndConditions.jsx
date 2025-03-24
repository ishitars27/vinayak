import React from "react";
import "../styles/terms.css"; // Create this CSS file for styling
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Last updated: March 11, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to Cruising 350! By using our website, you agree to these Terms and Conditions. If you do not agree, please do not use our website.</p>
      </section>

      <section>
        <h2>2. Products and Services</h2>
        <p>We offer motorcycle accessories and related products. Availability and pricing may change without notice.</p>
      </section>

      <section>
        <h2>3. Orders and Payments</h2>
        <p>All orders must be paid in full before shipping. We use secure third-party payment gateways for transactions.</p>
      </section>

      <section>
        <h2>4. Returns and Refunds</h2>
        <p>You can return items within 7 days of delivery. Items must be unused and in original packaging. Shipping fees are non-refundable.</p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>We are not responsible for any damages or injuries resulting from the use of our products.</p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>We use Tidio for chatbot services. By interacting with our chatbot, you agree to their privacy policy.</p>
      </section>

      <section>
        <h2>7. Changes to Terms</h2>
        <p>We may update these Terms at any time. Continued use of the site means you accept the new terms.</p>
      </section>

      <p>For any questions, contact us at <a href="mailto:vinayaksinghforyou@gmail.com">vinayaksinghforyou@gmail.com</a>.</p>

\
    </div>
  );
};
export default TermsAndConditions;
