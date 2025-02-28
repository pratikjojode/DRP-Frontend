import React from "react";
import UniversityImage from "../images/indiaaaaa.jpg"; // Add an appropriate image
import Footer from "../components/Footer";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const IndianHome = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="india-container">
        <img
          src={UniversityImage}
          alt="Indian University"
          className="uni-image"
        />
        <h1 className="title">Higher Education in India</h1>
        <p className="description">
          India's higher education system is one of the largest in the world,
          consisting of universities, colleges, and research institutions. It
          includes central universities, state universities, private
          universities, and institutes of national importance (like IITs and
          IIMs).
        </p>

        <div className="section">
          <h2>Top Universities in India</h2>

          <div className="category">
            <h3>Engineering & Technology</h3>
            <ul>
              <li>Indian Institutes of Technology (IITs)</li>
              <li>National Institutes of Technology (NITs)</li>
              <li>Birla Institute of Technology and Science (BITS), Pilani</li>
              <li>IIITs (Indian Institutes of Information Technology)</li>
            </ul>
          </div>

          <div className="category">
            <h3>Management & Business Studies</h3>
            <ul>
              <li>Indian Institutes of Management (IIMs)</li>
              <li>XLRI – Xavier School of Management, Jamshedpur</li>
              <li>Indian School of Business (ISB), Hyderabad</li>
              <li>SP Jain Institute of Management and Research, Mumbai</li>
            </ul>
          </div>

          <div className="category">
            <h3>Medicine & Health Sciences</h3>
            <ul>
              <li>All India Institute of Medical Sciences (AIIMS)</li>
              <li>
                Postgraduate Institute of Medical Education and Research
                (PGIMER)
              </li>
              <li>Christian Medical College (CMC), Vellore</li>
              <li>JIPMER, Puducherry</li>
            </ul>
          </div>
        </div>

        <div className="benefits">
          <h2>Why Choose Indian Universities?</h2>
          <ul>
            <li>Affordable tuition compared to Western countries</li>
            <li>Strong faculty & research programs</li>
            <li>
              Global recognition in fields like IT, Engineering, and Business
            </li>
            <li>Growing international student opportunities</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndianHome;
