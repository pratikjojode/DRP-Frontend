import React, { useState } from "react";
import { Card, message, Spin } from "antd";
import DrpEeduHeader from "../components/DrpEeduHeader";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import styles from "../styles/Insurance.css";
import insuranceImage from "../images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg"; // Update the path accordingly
import axios from "axios";

const Insurance = () => {
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
      <DrpEeduHeader />
      <DrpEduNavbar />
      <div className="insurance-container">
        {/* Banner Image */}
        <img
          src={insuranceImage}
          alt="Travel Insurance"
          className="insurance-banner"
        />

        <h1>Travel Insurance Guide</h1>

        <Card title="Coverage Types" className="insurance-card">
          <p>Travel Insurance typically offers the following coverages:</p>
          <ul className="insurance-list">
            <li>
              <b>Medical Emergencies:</b> Coverage for medical treatment if you
              fall ill or suffer an accident while traveling.
            </li>
            <li>
              <b>Trip Cancellation or Interruption:</b> Compensation for
              non-refundable costs if your trip is canceled or interrupted due
              to unexpected events.
            </li>
            <li>
              <b>Baggage Loss or Delay:</b> Reimbursement for lost, stolen, or
              delayed luggage.
            </li>
            <li>
              <b>Flight Delays and Missed Connections:</b> Compensation for
              missed flights and accommodations due to delays or cancellations.
            </li>
            <li>
              <b>Personal Liability:</b> Protection against accidental injury or
              property damage to others.
            </li>
            <li>
              <b>Emergency Evacuation:</b> Coverage for transportation to a
              medical facility or back home in case of serious injury or
              illness.
            </li>
            <li>
              <b>Emergency Dental Care:</b> Coverage for dental treatment in
              case of an emergency.
            </li>
          </ul>
        </Card>

        <Card
          title="Travel Insurance for Domestic (India)"
          className="insurance-card"
        >
          <p>
            For travel within India, domestic travel insurance provides
            protection in case of unexpected issues. It generally covers:
          </p>
          <ul className="insurance-list">
            <li>Trip Delays/Interruptions</li>
            <li>Medical Emergencies (including ambulance services)</li>
            <li>Accidental Death and Disability</li>
            <li>Lost or Delayed Baggage</li>
            <li>Hijacking</li>
            <li>
              Personal Liability (for accidents that cause injury or damage)
            </li>
          </ul>
          <p>
            <b>Popular Providers for India:</b> Bajaj Allianz, HDFC ERGO, ICICI
            Lombard, Religare Health Insurance.
          </p>
        </Card>

        <Card
          title="Travel Insurance for International Travel"
          className="insurance-card"
        >
          <p>
            International travel insurance is more comprehensive due to the
            higher risks and expenses of traveling abroad. It includes
            everything in domestic plans plus:
          </p>
          <ul className="insurance-list">
            <li>Medical Evacuation and Repatriation</li>
            <li>Trip Cancellation & Trip Interruption</li>
            <li>Lost Passport Coverage</li>
            <li>Emergency Assistance Services (available 24/7)</li>
            <li>Legal Assistance in case of emergencies abroad</li>
            <li>
              Coverage for Specific Activities (e.g., adventure sports, scuba
              diving, etc.)
            </li>
          </ul>
          <p>
            <b>Popular International Providers:</b> Tata AIG, HDFC ERGO, SBI
            General Insurance, ICICI Lombard, World Nomads.
          </p>
        </Card>

        <Card
          title="Things to Consider When Buying Travel Insurance"
          className="insurance-card"
        >
          <p>
            Consider the following factors when selecting a travel insurance
            plan:
          </p>
          <ul className="insurance-list">
            <li>
              <b>Duration of Coverage:</b> Ensure the policy covers the entire
              trip.
            </li>
            <li>
              <b>Pre-existing Conditions:</b> Some policies don't cover
              pre-existing medical conditions.
            </li>
            <li>
              <b>Policy Limits:</b> Check the payout limits for medical expenses
              and lost baggage.
            </li>
            <li>
              <b>Emergency Contact:</b> Ensure that the insurer provides a 24/7
              emergency helpline.
            </li>
          </ul>
        </Card>

        <Card title="Cost of Travel Insurance" className="insurance-card">
          <p>The cost of travel insurance depends on:</p>
          <ul className="insurance-list">
            <li>
              <b>Destination:</b> Traveling to countries with high healthcare
              costs (e.g., the U.S.) will cost more.
            </li>
            <li>
              <b>Duration of Travel:</b> Longer trips generally cost more to
              insure.
            </li>
            <li>
              <b>Coverage Type:</b> More comprehensive coverage means a higher
              premium.
            </li>
          </ul>
        </Card>
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

export default Insurance;
