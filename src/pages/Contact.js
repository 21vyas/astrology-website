import React from "react";
import './styles/Contact.css'; // Correct relative path to the CSS file

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out via the form below.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
