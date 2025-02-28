import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Harwdarecourse.css";
import comph from "../images/comph.jpg";
import net from "../images/net.png";
import Processor from "../images/proce.jpg";
import Pc from "../images/DALL·E 2025-02-15 12.54.54 - A detailed image of a PC assembly and troubleshooting process. The image should depict a technician working on an open computer case, installing compo.webp";
const courses = [
  {
    title: "Computer Hardware Fundamentals",
    description:
      "Learn the basics of computer architecture, hardware components, and troubleshooting techniques.",
    image: comph,
  },
  {
    title: "Networking & IT Infrastructure",
    description:
      "Understand networking protocols, hardware configurations, and infrastructure management.",
    image: net,
  },
  {
    title: "Processor & Memory Architecture",
    description:
      "Deep dive into CPU architecture, memory management, and storage technologies.",
    image: Processor,
  },
  {
    title: "PC Assembly & Troubleshooting",
    description:
      "Learn to assemble, diagnose, and repair PCs with hands-on practical knowledge.",
    image: Pc,
  },
];

const HardwareCourses = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="hardware-container">
        <h2 className="hardware-title">Explore Hardware Courses</h2>
        <p className="hardware-subtitle">
          Develop skills in computer hardware, networking, and IT
          infrastructure.
        </p>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HardwareCourses;
