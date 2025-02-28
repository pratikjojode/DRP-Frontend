import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed
import "../styles/courseInquiryForm.css";

const CourseInquiryForm = ({ courseTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inquiryData = {
      name,
      email,
      courseName: courseTitle,
      contact,
      message,
    };

    try {
      const response = await axios.post(
        "/api/v1/inquiry/course-inquiry",
        inquiryData
      );
      console.log(response.data);
      alert("Inquiry Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <form className="course-inquiry-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Your Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Inquiry"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="submit-button">
        Submit Inquiry
      </button>
    </form>
  );
};

export default CourseInquiryForm;
