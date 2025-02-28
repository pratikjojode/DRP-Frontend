import React, { useState } from "react";
import "../styles/EducationLoan.css";
import usaImage from "../images/usa.png";
import ukImage from "../images/uka.jpg";
import canadaImage from "../images/canada.png";
import australiaImage from "../images/aus.jpg";
import germanyImage from "../images/germany.png";
import singaporeImage from "../images/sing.jpg";
import abroadImage from "../images/education-abroad.jpg";
import Header from "../components/DrpEeduHeader";
import DrpeduVanbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { message, Spin } from "antd";

const destinations = [
  {
    name: "United States",
    image: usaImage,
    universities: "Harvard, MIT, Stanford",
    programs: "Engineering, Business, Computer Science",
    visa: "F1 Student Visa",
    language: "English Proficiency (TOEFL/IELTS)",
  },
  {
    name: "United Kingdom",
    image: ukImage,
    universities: "Oxford, Cambridge, Imperial College London",
    programs: "Law, Medicine, Business, Engineering",
    visa: "Tier 4 Student Visa",
    language: "English Proficiency (IELTS/TOEFL)",
  },
  {
    name: "Canada",
    image: canadaImage,
    universities: "University of Toronto, UBC, McGill University",
    programs: "Healthcare, IT, Engineering, Finance",
    visa: "Canada Study Permit",
    language: "English/French (IELTS/TOEFL)",
  },
  {
    name: "Australia",
    image: australiaImage,
    universities: "University of Melbourne, ANU, University of Sydney",
    programs: "Medicine, Business, Environmental Science",
    visa: "Student Visa Subclass 500",
    language: "English Proficiency (IELTS/TOEFL)",
  },
  {
    name: "Germany",
    image: germanyImage,
    universities:
      "LMU Munich, University of Heidelberg, University of Freiburg",
    programs: "Engineering, Computer Science, Medicine, Natural Sciences",
    visa: "Student Visa for Germany",
    language: "English & German (Some courses require German proficiency)",
  },
  {
    name: "Singapore",
    image: singaporeImage,
    universities: "NUS, NTU, Singapore Management University",
    programs: "Finance, IT, Data Science, Business",
    visa: "Student Pass (Singapore)",
    language: "English (Primary language for instruction)",
  },
];

const EducationLoan = () => {
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
      <DrpeduVanbar />
      <div className="education-loan-container">
        {/* Background Image */}
        <div className="abroad-image">
          <img src={abroadImage} alt="Study Abroad" />
        </div>

        <h1>Abroad Education</h1>
        <p>
          Abroad Education refers to studying in a foreign country, where
          students pursue academic programs that may not be available in their
          home country, or they may seek to enhance their learning experiences
          through exposure to international perspectives, advanced facilities,
          and broader career opportunities.
        </p>

        <h2>Benefits of Studying Abroad</h2>
        <ul className="benefits-list">
          <li>
            <strong>Cultural Exposure:</strong> Immersing yourself in a new
            culture helps develop a global perspective, cross-cultural
            communication skills, and a deeper understanding of the world.
          </li>
          <li>
            <strong>High-Quality Education:</strong> Many foreign universities
            and institutions provide specialized programs, state-of-the-art
            research opportunities, and globally recognized degrees.
          </li>
          <li>
            <strong>Career Opportunities:</strong> Studying abroad increases
            your employability by offering international exposure, networking
            opportunities, and language skills.
          </li>
          <li>
            <strong>Personal Growth:</strong> Living in a foreign country helps
            build independence, resilience, and problem-solving skills as
            students adapt to new environments.
          </li>
          <li>
            <strong>Language Skills:</strong> Studying abroad provides the
            opportunity to learn new languages or improve language proficiency,
            which is a valuable asset in the global job market.
          </li>
        </ul>

        <h2>Popular Study Abroad Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <div key={index} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <strong>{dest.name}</strong>
              <p>
                <strong>Top Universities:</strong> {dest.universities}
              </p>
              <p>
                <strong>Popular Programs:</strong> {dest.programs}
              </p>
              <p>
                <strong>Student Visa:</strong> {dest.visa}
              </p>
              <p>
                <strong>Language Requirements:</strong> {dest.language}
              </p>
            </div>
          ))}
        </div>

        <h2>Admission Process for Studying Abroad</h2>
        <ol>
          <li>
            <strong>Research & Shortlisting:</strong> Choose your destination,
            university, and course based on career goals and personal interests.
          </li>
          <li>
            <strong>Standardized Tests:</strong> GRE, GMAT, SAT, ACT, IELTS,
            TOEFL, LSAT, MCAT, subject-specific tests.
          </li>
          <li>
            <strong>Application Documents:</strong> Academic transcripts,
            letters of recommendation, statement of purpose, resume, test
            scores, portfolio.
          </li>
          <li>
            <strong>Application Submission:</strong> Through university portals,
            UCAS (UK), CommonApp (US).
          </li>
          <li>
            <strong>Interview/Admission Decision:</strong> Some programs require
            interviews; accepted students receive offer letters.
          </li>
          <li>
            <strong>Student Visa Application:</strong> Requires proof of
            admission, financial capability, passport, visa forms, health
            insurance.
          </li>
        </ol>

        <h2>Financial Considerations</h2>
        <ul>
          <li>
            <strong>Tuition Fees:</strong> Vary by country and university.
          </li>
          <li>
            <strong>Living Expenses:</strong> Includes accommodation, food, and
            transport.
          </li>
          <li>
            <strong>Scholarships & Financial Aid:</strong> Fulbright, Chevening,
            DAAD.
          </li>
        </ul>

        <h2>Challenges of Studying Abroad</h2>
        <ul className="challenges-list">
          <li>
            <strong>Culture Shock:</strong> Adjusting to a new culture,
            language, food, and lifestyle can be overwhelming.
          </li>
          <li>
            <strong>Homesickness:</strong> Being away from home for an extended
            period can sometimes lead to feelings of loneliness.
          </li>
          <li>
            <strong>Financial Pressure:</strong> Balancing tuition fees, living
            expenses, and other costs can be challenging without proper
            financial planning.
          </li>
          <li>
            <strong>Visa & Immigration Issues:</strong> Ensuring that you comply
            with visa regulations and timelines is essential to avoid
            complications.
          </li>
        </ul>

        <h2>Post-Graduation Opportunities</h2>
        <ul>
          <li>
            <strong>Work Permit:</strong> Post-graduation work permits.
          </li>
          <li>
            <strong>Career Services:</strong> Universities offer networking
            events.
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

export default EducationLoan;
