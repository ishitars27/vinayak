import React from "react";
import "../styles/contactus.css";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Hero Section with Background Image */}
      <div className="contact-hero">
        <h1>Let’s Ride Together – Contact Us!</h1>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <p><strong>Email:</strong> support@cruising350.com</p>
        <p><strong>Phone:</strong> +91 8287764234</p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/cruising350/" target="_blank" rel="noopener noreferrer">Follow us</a></p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p><strong>How long does shipping take?</strong> – 3-5 business days.</p>
        <p><strong>Can I return a product?</strong> – Yes, within 7 days of delivery.</p>
        <p><strong>Do you ship internationally?</strong> – Currently, we ship only within India.</p>
      </div>

      <Footer />
    </div>
  );
};
export default ContactUs;
