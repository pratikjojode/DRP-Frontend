import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/AirTicketBooking.css"; // Ensure this file exists
import flight from "../images/flight.jpg";
import axios from "axios";
import { message, Spin } from "antd";

const AirTicketBooking = () => {
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
      <div className="air-ticket-container">
        <img src={flight} alt="Flight" className="air-ticket-image" />
        <h1 className="air-ticket-title">Flight Ticket Booking Guide</h1>
        <p className="air-ticket-text">
          Flight Ticket Booking is an essential part of travel planning. Whether
          you are traveling for business, leisure, or study, booking a flight
          involves several steps to find the best options based on your
          preferences, budget, and schedule.
        </p>
        <h2 className="air-ticket-subtitle">
          Steps for Booking a Flight Ticket
        </h2>
        <ol className="air-ticket-list">
          <li>
            <span className="air-ticket-highlight">
              Determine Your Travel Dates:
            </span>{" "}
            Choose flexible dates to find cheaper fares and consider peak
            seasons.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Choose Your Departure and Arrival Locations:
            </span>{" "}
            Consider nearby airports for better pricing.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Select the Flight Type:
            </span>{" "}
            One-Way, Round-Trip, or Multi-City based on your needs.
          </li>
          <li>
            <span className="air-ticket-highlight">Search for Flights:</span>{" "}
            Use platforms like Google Flights, Skyscanner, Kayak, Expedia, and
            airline websites.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Filter and Compare Options:
            </span>{" "}
            Sort by price, duration, stopovers, and airlines.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Choose the Right Fare Class:
            </span>{" "}
            Economy, Premium Economy, Business, or First Class.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Check for Deals and Promotions:
            </span>{" "}
            Look for discounts, flash sales, and loyalty programs.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Review Baggage Policies:
            </span>{" "}
            Ensure baggage limits fit your needs.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Select Your Seat and Add-Ons:
            </span>{" "}
            Choose seats, meals, extra legroom, and insurance.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Enter Passenger Details:
            </span>{" "}
            Ensure all information matches your travel documents.
          </li>
          <li>
            <span className="air-ticket-highlight">Review Your Booking:</span>{" "}
            Double-check dates, names, and total price.
          </li>
          <li>
            <span className="air-ticket-highlight">Make Payment:</span> Use
            secure payment methods.
          </li>
          <li>
            <span className="air-ticket-highlight">Confirm Your Booking:</span>{" "}
            Receive a confirmation email with your e-ticket.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Check-In for Your Flight:
            </span>{" "}
            Complete online check-in 24–48 hours before departure.
          </li>
        </ol>
        <h2 className="air-ticket-subtitle">
          Tips for Finding the Best Flight Deals
        </h2>
        <ul className="air-ticket-tips">
          <li>
            <span className="air-ticket-highlight">Book in Advance:</span> 3-6
            weeks for domestic, 2-3 months for international flights.
          </li>
          <li>
            <span className="air-ticket-highlight">Use Flexible Dates:</span>{" "}
            Adjusting travel dates can lead to cheaper options.
          </li>
          <li>
            <span className="air-ticket-highlight">Set Price Alerts:</span> Use
            flight tracking tools.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Check Alternative Airports:
            </span>{" "}
            Nearby airports might offer lower fares.
          </li>
          <li>
            <span className="air-ticket-highlight">Consider Stopovers:</span>{" "}
            Layovers can reduce costs.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Look for Special Deals:
            </span>{" "}
            Airlines offer seasonal sales.
          </li>
          <li>
            <span className="air-ticket-highlight">
              Use Airline Miles or Credit Card Points:
            </span>{" "}
            Redeem points for cheaper flights.
          </li>
          <li>
            <span className="air-ticket-highlight">Clear Browser Cookies:</span>{" "}
            Avoid potential price hikes.
          </li>
        </ul>
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

export default AirTicketBooking;
