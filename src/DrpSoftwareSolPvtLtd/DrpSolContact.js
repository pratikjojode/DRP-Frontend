import React, { useState } from "react";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";

const DrpSolContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const address =
    "Shop no. 02, Dwarka Apartment, Professor Colony, Opposite Chirantan Hospital, Devpur, Dhule, Maharashtra, Pin No.- 424002";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/v1/inquiry/form", formData);

      // Handle success response
      if (response.status === 201) {
        message.success("Message sent successfully!");
      }
    } catch (error) {
      // Handle error response
      message.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop the spinner
    }
  };
  return (
    <>
      <DrpSolHeader />
      <DrpSoftwareNavbar />
      <div className="contact-container">
        <div className="contact-us-content">
          <h1>Contact Us</h1>
          <p>
            Email, call, or complete the form to learn how DrP can solve your
            messaging problem.
          </p>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong>{" "}
              <Link to="mailto:support@drp.com">supportdrp@drp.com</Link>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <Link to="tel:+919699657891">+91 9699657891</Link>
            </p>
            <p>
              <strong>Address:</strong> Shop no. 02, Dwarka Apartment, Professor
              Colony,
              <br /> Opposite Chirantan Hospital, Devpur, Dhule, Maharashtra,
              Pin No.- 424002
              <br />
              <a href={mapLink} target="_blank" rel="noreferrer">
                View on Map
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <p>You can reach us anytime</p>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
              ></textarea>
            </label>
            <button type="submit" className="contact" disabled={isSubmitting}>
              {isSubmitting ? <div className="spinner"></div> : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DrpSolContact;
