import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import "../styles/FeedbackForm.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/feedbacks/feedback", feedback);
      message.success(response.data.message);
      setFeedback({
        name: "",
        email: "",
        phone: "",
        rating: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      message.error("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={feedback.phone}
          onChange={handleChange}
          required
        />

        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
          required
        >
          <option value="">Rate Us (1-5)</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={feedback.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={feedback.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
