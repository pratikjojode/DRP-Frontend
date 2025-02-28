import React, { useState } from "react";
import { Card, message, Spin } from "antd";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/SimCards.css";
import simCardImage from "../images/gettyimages-1501760305-612x612.jpg";
import axios from "axios";

const SimCards = () => {
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
      <div className="sim-cards-container">
        {" "}
        <img src={simCardImage} alt="Sim Cards" className="sim-card-banner" />
        <h1>Abroad Sim Card</h1>
        <Card className="sim-card">
          <p>
            Abroad SIM Cards are essential for staying connected when traveling
            or living in another country. They allow you to make calls, send
            messages, and use mobile data without relying on expensive
            international roaming.
          </p>
        </Card>
        <Card title="Types of SIM Cards for Abroad Travel" className="sim-card">
          <h3>1. Prepaid SIM Cards:</h3>
          <ul>
            <li>Pay in advance for data, calls, and texts.</li>
            <li>No long-term commitment, easy to manage costs.</li>
            <li>Available in airports, mobile carrier shops, or online.</li>
          </ul>
          <h3>2. Postpaid SIM Cards:</h3>
          <ul>
            <li>Subscription-based, billed after usage.</li>
            <li>
              Better for long-term stays but requires local address and credit
              card.
            </li>
          </ul>
          <h3>3. International SIM Cards:</h3>
          <ul>
            <li>Works across multiple countries.</li>
            <li>
              More expensive than local SIMs but convenient for frequent
              travelers.
            </li>
          </ul>
          <h3>4. eSIM (Embedded SIM):</h3>
          <ul>
            <li>Digital SIM that can be activated online.</li>
            <li>
              No need for a physical SIM swap, but not all phones support eSIM.
            </li>
          </ul>
        </Card>
        <Card title="How to Get an Abroad SIM Card" className="sim-card">
          <ul>
            <li>
              <b>At the Airport:</b> Convenient but may be pricier.
            </li>
            <li>
              <b>Mobile Carrier Stores:</b> Usually offer the best plans.
            </li>
            <li>
              <b>Online:</b> Buy before your trip for convenience.
            </li>
            <li>
              <b>Convenience Stores:</b> Available in malls and transport hubs.
            </li>
          </ul>
        </Card>
        <Card title="Choosing the Best SIM Card" className="sim-card">
          <ul>
            <li>
              <b>Coverage: </b>Check network strength in your destination.
            </li>
            <li>
              <b>Data Plans:</b> Ensure enough data for your needs.
            </li>
            <li>
              <b>Roaming:</b> Consider international SIMs if visiting multiple
              countries.
            </li>
            <li>
              <b>Cost:</b> Compare rates for calls, texts, and data.
            </li>
            <li>
              <b>Phone Compatibility:</b> Ensure your phone is unlocked and
              supports required network bands.
            </li>
          </ul>
        </Card>
        <Card
          title="Popular International SIM Card Providers"
          className="sim-card"
        >
          <ul>
            <li>
              <strong>Airalo (eSIM):</strong> Works in 190+ countries, easy
              activation.
            </li>
            <li>
              <strong>OneSimCard:</strong> Great for multi-country travelers.
            </li>
            <li>
              <strong>GigSky (eSIM):</strong> Flexible data plans.
            </li>
            <li>
              <strong>Orange Holiday SIM:</strong> Prepaid option for European
              travel.
            </li>
            <li>
              <strong>T-Mobile (USA):</strong> International plans available.
            </li>
            <li>
              <strong>Vodafone (UK & Global):</strong> Prepaid & postpaid global
              roaming plans.
            </li>
            <li>
              <strong>SIM Corner or SIM Local:</strong> Available online and in
              airports.
            </li>
          </ul>
        </Card>
        <Card
          title="Activating and Using Your Abroad SIM Card"
          className="sim-card"
        >
          <ul>
            <li>Insert the SIM card and restart your phone if needed.</li>
            <li>Follow activation steps (text, call, or app setup).</li>
            <li>Check your balance and top-up when required.</li>
          </ul>
        </Card>
        <Card title="Benefits of Using a Local SIM Card" className="sim-card">
          <ul>
            <li>
              <b></b> Avoid expensive international roaming.
            </li>
            <li>
              <b>Better Coverage:</b> Local carriers provide stronger network
              access.
            </li>
            <li>
              <b>Affordable Data:</b> Get cheaper mobile data rates.
            </li>
          </ul>
        </Card>
        <h1>Contact us</h1>
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

export default SimCards;
