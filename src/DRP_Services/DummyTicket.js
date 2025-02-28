import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/DummyTicket.css";
import ticketImage from "../images/dummyTicket.jpg"; // Importing the image
import axios from "axios";
import { message, Spin } from "antd";

const DummyTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/submit-form-drp",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        message.success("Form submitted successfully! Email sent.");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Ensure loading state is reset after submission
    }
  };
  return (
    <>
      <Header />
      <DrpEduNavbar />

      <div className="dummy-container">
        {/* Image Section */}
        <div className="dummy-image-container">
          <img src={ticketImage} alt="Dummy Ticket" className="dummy-image" />
        </div>

        <h1 className="dummy-heading">What is a Dummy Ticket?</h1>
        <p className="dummy-paragraph">
          A Dummy Ticket is a flight reservation that looks like a regular
          airline ticket but is not actually paid for or confirmed for travel.
          It typically includes a valid PNR (Passenger Name Record) or booking
          reference number, which can sometimes be verified on airline websites
          under "Manage My Booking" or "My Trips."
        </p>

        <h2 className="dummy-subheading">Uses of a Dummy Ticket:</h2>
        <ul className="dummy-list">
          <li>
            <strong>Visa Applications:</strong> Many embassies require flight
            reservations as part of the visa process.
          </li>
          <li>
            <strong>Proof of Return or Onward Travel:</strong> Immigration
            officers may ask for a return or onward ticket.
          </li>
          <li>
            <strong>Expedited Passport Renewal:</strong> Some passport offices
            require travel proof for urgent renewals.
          </li>
          <li>
            <strong>HR/Manager Approval:</strong> Used to show leave plans to
            employers.
          </li>
          <li>
            <strong>Exit Visa Procedures:</strong> Required in some Gulf
            Cooperation Council (GCC) countries.
          </li>
          <li>
            <strong>Car Rentals at Airports:</strong> Some agencies require
            flight details for verification.
          </li>
        </ul>

        <p className="dummy-note">
          While dummy tickets are widely used for these purposes, they should be
          obtained legally through legitimate reservation services and not used
          for fraudulent intentions.
        </p>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Your Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Inquiry About</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Inquiry About"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Spin size="small" /> : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default DummyTicket;
