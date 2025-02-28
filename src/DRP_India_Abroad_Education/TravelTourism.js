import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/TravelTourism.css";
import travelImage from "../images/travelt.jpg"; // Ensure the image is available
import axios from "axios";
import { message, Spin } from "antd";

const TravelTourism = () => {
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
      <div className="travel-tourism-container">
        {/* Image Section */}
        <div className="travel-tourism-image-container">
          <img
            src={travelImage}
            alt="Travel and Tourism"
            className="travel-tourism-image"
          />
        </div>

        {/* Introduction */}
        <p className="travel-tourism-text">
          Travel & Tourism is a vast industry encompassing various activities
          related to traveling for leisure, business, education, health, or
          adventure. It involves the movement of people to different
          destinations, both domestic and international, and includes services
          like transportation, accommodation, food, entertainment, and guided
          tours.
        </p>
        <h1 className="travel-tourism-title">Travel & Tourism</h1>
        {/* Key Components */}
        <h2 className="travel-tourism-section-title">
          Key Components of the Travel & Tourism Industry
        </h2>

        {/* Tourism Types */}
        <h3 className="travel-tourism-subtitle">1. Tourism Types:</h3>
        <ul className="travel-tourism-list">
          <li className="travel-tourism-list-item">
            <strong>Leisure Tourism:</strong> Traveling for enjoyment, exploring
            new destinations, and relaxing.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Business Tourism:</strong> Travel related to corporate
            events, meetings, and conferences.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Adventure Tourism:</strong> Activities like trekking, scuba
            diving, and safaris.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Eco-Tourism:</strong> Exploring nature while conserving the
            environment.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Cultural Tourism:</strong> Visiting places of historical and
            artistic significance.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Medical Tourism:</strong> Traveling abroad for medical
            treatments.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Religious Tourism:</strong> Pilgrimages to sacred sites.
          </li>
        </ul>

        {/* Popular Destinations */}
        <h3 className="travel-tourism-subtitle">
          2. Popular Travel Destinations:
        </h3>
        <ul className="travel-tourism-list">
          <li className="travel-tourism-list-item">
            <strong>Paris, France:</strong> Known for the Eiffel Tower, Louvre
            Museum, and exquisite cuisine.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Maldives:</strong> A paradise for beach lovers with its
            white sandy beaches and crystal-clear waters.
          </li>
          <li className="travel-tourism-list-item">
            <strong>New York, USA:</strong> The city that never sleeps, home to
            Times Square, Central Park, and Broadway.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Dubai, UAE:</strong> Famous for luxury shopping, ultramodern
            architecture, and vibrant nightlife.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Tokyo, Japan:</strong> A mix of traditional culture and
            futuristic innovations.
          </li>
        </ul>

        {/* Benefits of Travel */}
        <h3 className="travel-tourism-subtitle">3. Benefits of Traveling:</h3>
        <ul className="travel-tourism-list">
          <li className="travel-tourism-list-item">
            <strong>Personal Growth:</strong> Expanding horizons by experiencing
            new cultures and traditions.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Stress Relief:</strong> Taking a break from daily routines
            and refreshing the mind.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Networking Opportunities:</strong> Meeting new people and
            broadening social and professional circles.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Health Benefits:</strong> Traveling promotes physical
            activity and mental relaxation.
          </li>
        </ul>

        {/* Travel Tips */}
        <h3 className="travel-tourism-subtitle">
          4. Travel Tips for a Safe Journey:
        </h3>
        <ul className="travel-tourism-list">
          <li className="travel-tourism-list-item">
            <strong>Plan Ahead:</strong> Research destinations and make bookings
            in advance.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Pack Wisely:</strong> Carry essentials based on climate and
            trip duration.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Stay Safe:</strong> Keep emergency contacts and travel
            insurance handy.
          </li>
          <li className="travel-tourism-list-item">
            <strong>Respect Local Cultures:</strong> Be mindful of traditions
            and customs in different regions.
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

export default TravelTourism;
