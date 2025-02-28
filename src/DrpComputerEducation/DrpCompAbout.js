import React from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import "../styles/DrpCompAbout.css";
import aboutImage from "../images/about.jpg"; // Add an image in your assets folder

const DrpCompAbout = () => {
  return (
    <>
      <DrpCompHeader />
      <DrpCompNavbar />
      <div className="about-container-comp">
        <div className="about-content-comp">
          <h1 className="about-title-comp">About Us</h1>
          <p className="about-description-comp">
            Welcome to <strong>DRP Computer Education & Training</strong>, where
            we provide high-quality technical education and training to empower
            individuals in the world of technology. Our mission is to equip
            students with the skills and knowledge needed to excel in the IT
            industry.
          </p>
          <h2 className="about-subtitle-comp">Our Programs</h2>
          <ul className="about-list-comp">
            <li>Full Stack Web Development (MERN, MEAN, LAMP)</li>
            <li>Data Science & AI with Python</li>
            <li>Cyber Security & Ethical Hacking</li>
            <li>Software Testing (Manual & Automation)</li>
            <li>Graphic Design & UI/UX Development</li>
            <li>Cloud Computing & DevOps</li>
          </ul>
          <p className="about-footer-comp">
            Whether you are a beginner or an experienced professional, we have
            courses that will help you upskill and stay ahead in the rapidly
            evolving IT industry.
          </p>
        </div>
        <div className="about-image-container-comp">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DrpCompAbout;
