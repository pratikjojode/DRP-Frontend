import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLightbulb, FaRocket } from "react-icons/fa"; // Import Icons
import "../styles/Vsiioson.css";

const VissionAndMission = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="perii-container">
        <div className="perii-card vision-card">
          <FaLightbulb className="perii-icon" />
          <h2 className="perii-title">
            Our <span>Vision</span>
          </h2>
          <p className="perii-description">
            To be a leading force in technology, innovation, and skill
            development by delivering cutting-edge software solutions, expert
            consultancy services, and high-quality training programs.
          </p>
        </div>

        <div className="perii-card mission-card">
          <FaRocket className="perii-icon" />
          <h2 className="perii-title">
            Our <span>Mission</span>
          </h2>
          <p className="perii-description">
            Our mission is to bridge opportunities and technological
            advancements, ensuring global accessibility and excellence.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VissionAndMission;
