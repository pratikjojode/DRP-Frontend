import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import "../styles/StudentVisa.css"; // Ensure you have this CSS file
import visa from "../images/visa1.avif";
import Fotter from "../components/Footer";
import axios from "axios";
import { message, Spin } from "antd";

const StudentVisa = () => {
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

      <div className="visa-container">
        <div className="visa-introduction">
          <img src={visa} alt="Student Visa" className="visa-image" />
          <h1>India Student Visa Process</h1>
          <p>
            The visa process for India (or other countries) can vary based on
            the type of visa you are applying for. Here's a general outline of
            how the process works for most types of visas:
          </p>
        </div>

        <h2>1. Determine the Type of Visa</h2>
        <ul>
          <li>Tourist Visa</li>
          <li>Business Visa</li>
          <li>Student Visa</li>
          <li>Employment Visa</li>
          <li>Transit Visa</li>
        </ul>

        <h2>2. Check Eligibility and Requirements</h2>
        <p>
          Each visa type has specific requirements. Common documents include:
        </p>
        <ul>
          <li>Passport with at least six months validity</li>
          <li>Visa Application Form (completed online or offline)</li>
          <li>Photographs (passport-size)</li>
          <li>
            Proof of Financial Stability (bank statements, tax returns, etc.)
          </li>
          <li>
            Purpose of Visit (invitation letters, admission letters, travel
            itinerary, etc.)
          </li>
          <li>
            Fee Payment (visa fees vary depending on the type and country)
          </li>
        </ul>

        <h2>3. Complete the Application</h2>
        <p>Follow these steps to complete the visa application process:</p>
        <ul>
          <li>
            Visit the Embassy or Consulate's Website to fill out the visa
            application form.
          </li>
          <li>
            Double-check the visa requirements and attach all necessary
            documents.
          </li>
        </ul>

        <h2>4. Submit the Application</h2>
        <p>There are two ways to submit the application:</p>
        <ul>
          <li>
            <strong>Online Submission:</strong> For many countries, you can
            apply online and submit your documents digitally.
          </li>
          <li>
            <strong>In-Person Submission:</strong> For some countries, you may
            need to visit the Visa Application Center (VAC) or embassy for
            document submission and biometric data collection.
          </li>
        </ul>

        <h2>5. Attend Interview or Biometrics (if required)</h2>
        <p>
          Some countries, including India, may require a personal interview or
          biometric data (fingerprints and photograph) collection.
        </p>

        <h2>6. Wait for Processing</h2>
        <p>
          Visa processing can take anywhere from a few days to several weeks,
          depending on the type of visa and country. You may be asked for
          additional documents or information during the processing stage.
        </p>

        <h2>7. Receive the Visa</h2>
        <p>Once approved, the visa will be:</p>
        <ul>
          <li>Stamped in the passport (for physical visas)</li>
          <li>
            Issued electronically (for e-visas, like the Indian e-Tourist Visa)
          </li>
        </ul>

        <h2>8. Travel</h2>
        <p>
          Ensure you carry all necessary documents when you travel, as
          immigration officers may check them upon entry.
        </p>

        <h2>India's Visa Process (e-Visa Option)</h2>
        <p>
          <strong>e-Visa:</strong> India offers electronic visas for tourists,
          business travelers, and those seeking medical treatment. The process
          is simpler than a regular visa.
        </p>
        <ul>
          <li>Apply online at the Indian e-Visa portal.</li>
          <li>
            You can expect approval in about 72 hours if all documents are in
            order.
          </li>
        </ul>

        <p>
          <strong>Note:</strong> For long-term visas (like student or employment
          visas), more paperwork may be required, such as an invitation letter
          or letter of employment.
        </p>
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

      <Fotter />
    </>
  );
};

export default StudentVisa;
