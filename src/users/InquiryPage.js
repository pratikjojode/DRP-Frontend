import React, { useState, useEffect } from "react";

// Inquiry Form Component
const InquiryForm = () => {
  return (
    <div className="inquiry-form">
      <h2>Inquiry Form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Main Page with Popup Form
const InquiryPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show the inquiry form after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second delay

    // Cleanup timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="inquiry-page">
      <h1>Inquiry Page</h1>
      <p>Please fill out the form below for your inquiry.</p>

      {/* Popup Inquiry Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <InquiryForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryPage;
