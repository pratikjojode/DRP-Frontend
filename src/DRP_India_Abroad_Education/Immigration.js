import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/Immigration.css"; // Ensure you have this CSS file
import Immi from "../images/imiii.jpg";
import axios from "axios";
import { message, Spin } from "antd";

const Immigration = () => {
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
      <div className="immigration-container">
        <h1 className="title">Immigration</h1>
        <img src={Immi} alt="Immigration" className="immigration-image" />
        <p className="description">
          Immigration is the process through which individuals move from their
          home country to a foreign country for various purposes, such as work,
          study, family reunification, or asylum.
        </p>
        <h2 className="section-title">Key Components of Immigration</h2>
        <h3 className="subheading">1. Visa Applications</h3>
        <ul className="list">
          <li>Work Visas: For people employed in foreign countries.</li>
          <li>
            Student Visas: For individuals attending educational institutions
            abroad.
          </li>
          <li>Tourist Visas: For short-term stays.</li>
          <li>
            Family Reunification Visas: For spouses, children, or other family
            members.
          </li>
          <li>
            Refugee or Asylum Seeker Status: For individuals fleeing conflict or
            persecution.
          </li>
        </ul>
        <h3 className="subheading">2. Immigration Laws and Policies</h3>
        <p className="description">
          Every country has its own immigration laws governing who can enter,
          stay, and work within its borders. Some countries (e.g., Canada,
          Australia, the UK) use points-based systems considering education,
          skills, work experience, and language proficiency.
        </p>
        <h3 className="subheading">3. Permanent Residency (PR)</h3>
        <ul className="list">
          <li>Express Entry (Canada)</li>
          <li>Green Card (USA)</li>
          <li>Permanent Resident Visa (Australia)</li>
        </ul>
        <h3 className="subheading">4. Naturalization and Citizenship</h3>
        <p className="description">
          After living in a country for a set number of years (typically between
          5 to 10 years), immigrants may be eligible to apply for citizenship
          through naturalization.
        </p>
        <h3 className="subheading">5. Immigration Process Steps</h3>
        <ol className="list">
          <li>Application Submission</li>
          <li>Document Verification</li>
          <li>Biometrics and Interview</li>
          <li>Approval/Rejection</li>
          <li>Entry and Residency</li>
        </ol>
        <h2 className="section-title">Popular Immigration Destinations</h2>
        <ul className="list">
          <li>
            United States: H-1B for work, F1 for students, Green Cards for
            permanent residency.
          </li>
          <li>
            Canada: Express Entry, Provincial Nominee Program (PNP), Family
            Sponsorship.
          </li>
          <li>
            Australia: Skilled Independent Visa, Employer Nomination Scheme,
            Student Visa.
          </li>
          <li>
            United Kingdom: Tier 2 Visa for work, Tier 4 for students, and
            family reunification options.
          </li>
        </ul>
        <h2 className="section-title">Challenges in Immigration</h2>
        <ul className="list">
          <li>Document Preparation</li>
          <li>Waiting Times</li>
          <li>Language Proficiency</li>
          <li>Financial Stability</li>
        </ul>
        <h2 className="section-title">Immigration Agencies and Support</h2>
        <p className="description">
          If you're finding the immigration process overwhelming, you can
          consult professional immigration consultants or lawyers who specialize
          in navigating the legal process.
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

export default Immigration;
