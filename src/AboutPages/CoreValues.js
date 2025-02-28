import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Core.css";
import {
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaUserCheck,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";

const coreValuesData = [
  {
    id: 1,
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "Continuously developing cutting-edge solutions and strategies to drive progress in technology and business.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Integrity",
    description:
      "Upholding transparency, honesty, and ethical practices in all our services.",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Excellence",
    description:
      "Striving for the highest quality in software solutions, consultancy, and training programs.",
  },
  {
    id: 4,
    icon: <FaUserCheck />,
    title: "Customer-Centricity",
    description:
      "Prioritizing client and learner needs to deliver tailored, impactful solutions.",
  },
  {
    id: 5,
    icon: <FaRocket />,
    title: "Empowerment",
    description:
      "Equipping businesses and individuals with the tools and knowledge for success in a digital world.",
  },
  {
    id: 6,
    icon: <FaLeaf />,
    title: "Sustainability",
    description:
      "Building long-term value through future-ready strategies and responsible practices.",
  },
];

const CoreValues = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="core-wrapper">
        <h2 className="core-heading">
          Our <span>Core Values</span>
        </h2>
        <div className="core-grid">
          {coreValuesData.map((value) => (
            <div key={value.id} className="core-card">
              <div className="core-icon">{value.icon}</div>
              <h3 className="core-title">{value.title}</h3>
              <p className="core-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoreValues;
