import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCode,
  FaChartLine,
  FaLightbulb,
  FaTasks,
  FaUsers,
  FaChalkboardTeacher,
  FaRocket,
  FaUserCheck,
} from "react-icons/fa"; // Import Icons
import "../styles/OurSkills.css";

const skillsData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Technical Expertise",
    description:
      "Proficiency in software development, IT solutions, and emerging technologies.",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Business Strategy & Analysis",
    description:
      "Strong analytical skills to provide data-driven consultancy and innovative business solutions.",
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    title: "Problem-Solving",
    description:
      "Identifying challenges and developing effective, tailored solutions for clients and learners.",
  },
  {
    id: 4,
    icon: <FaTasks />,
    title: "Project Management",
    description:
      "Efficient planning, execution, and delivery of software projects, consultancy solutions, and training programs.",
  },
  {
    id: 5,
    icon: <FaUsers />,
    title: "Communication & Collaboration",
    description:
      "Clear and effective communication to foster teamwork, client relationships, and knowledge transfer.",
  },
  {
    id: 6,
    icon: <FaChalkboardTeacher />,
    title: "Training & Development",
    description:
      "Expertise in designing and delivering high-quality educational programs for skill enhancement.",
  },
  {
    id: 7,
    icon: <FaRocket />,
    title: "Adaptability & Innovation",
    description:
      "Staying ahead in a rapidly evolving digital landscape by embracing new trends and technologies.",
  },
  {
    id: 8,
    icon: <FaUserCheck />,
    title: "Customer Focus",
    description:
      "Commitment to understanding and addressing the needs of businesses and learners.",
  },
];

const OurSkills = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="skills-wrapper">
        <h2 className="skills-heading">
          Our <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skills-card">
              <div className="skills-icon">{skill.icon}</div>
              <h3 className="skills-title">{skill.title}</h3>
              <p className="skills-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurSkills;
