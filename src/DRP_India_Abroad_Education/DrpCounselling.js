import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import styles from "../styles/DrpCounselling.css";
import counselling from "../images/counsellinng.png";

const DrpCounselling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    courseName: "",
  });

  const [loading, setLoading] = useState(false); // State to manage loading

  const courses = [
    "Computer Science",
    "Business Management",
    "Mechanical Engineering",
    "Data Science",
    "Medicine",
    "Psychology",
    "Law",
    "Architecture",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "/api/v1/inquiry/course-inquiry",
        formData
      );
      message.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        contact: "",
        courseName: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Header />
      <DrpEduNavbar />

      {/* Background Section */}
      <div className="counselling-background">
        <div className="counselling-container">
          {/* Left Side Image Section */}
          <div className="counselling-image">
            <img src={counselling} alt="Counselling" />
          </div>

          {/* Right Side Form Section */}
          <div className="counselling-content">
            <h2>Get Free Counselling for Studying Abroad</h2>
            <p>Fill in the form and let our experts guide you.</p>

            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <select
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Course
                  </option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <div className="spinner"></div> // Show spinner when loading
                  ) : (
                    "Request Counselling"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DrpCounselling;
