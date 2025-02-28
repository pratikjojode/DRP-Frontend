import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Webdev.css";
import WebDevImage from "../images/web.jpg"; // Add your image here

const WebDev = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="webdev-container">
        {/* Top Image */}
        <img src={WebDevImage} alt="Web Development" className="webdev-image" />

        <h1 className="webdev-title">Web Development</h1>
        <p className="webdev-description">
          Web development is the process of building and maintaining websites
          and web applications. It includes frontend development (user
          interface), backend development (server-side logic), and full-stack
          development (both frontend & backend).
        </p>

        {/* Types of Web Development */}
        <h2 className="section-title">1. Types of Web Development</h2>

        {/* Frontend Development */}
        <div className="webdev-section">
          <h3 className="sub-title">✅ Frontend Development (Client-Side)</h3>
          <p className="webdev-text">
            This deals with the visual part of a website that users interact
            with.
          </p>
          <h4 className="tech-title">📌 Technologies:</h4>
          <ul className="tech-list">
            <li>• HTML – Structure of the webpage</li>
            <li>
              • CSS – Styling & layout (Flexbox, Grid, Bootstrap, Tailwind)
            </li>
            <li>• JavaScript – Interactive elements (DOM manipulation)</li>
            <li>• Frontend Frameworks/Libraries: React.js, Angular, Vue.js</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="webdev-section">
          <h3 className="sub-title">✅ Backend Development (Server-Side)</h3>
          <p className="webdev-text">
            Manages databases, authentication, APIs, and application logic.
          </p>
          <h4 className="tech-title">📌 Technologies:</h4>
          <ul className="tech-list">
            <li>
              • Languages: Node.js (JavaScript), Python (Django/Flask), PHP,
              Ruby on Rails, Java (Spring Boot)
            </li>
            <li>• Databases: MySQL, PostgreSQL, MongoDB, Firebase</li>
            <li>• APIs: REST, GraphQL</li>
            <li>• Authentication: JWT, OAuth</li>
          </ul>
        </div>

        {/* Full-Stack Development */}
        <div className="webdev-section">
          <h3 className="sub-title">✅ Full-Stack Development</h3>
          <p className="webdev-text">
            A combination of frontend and backend development. Full-stack
            developers handle both UI and server-side logic.
          </p>
          <h4 className="tech-title">Popular Stacks:</h4>
          <ul className="tech-list">
            <li>• MERN Stack: MongoDB, Express.js, React.js, Node.js</li>
            <li>• MEAN Stack: MongoDB, Express.js, Angular, Node.js</li>
            <li>• LAMP Stack: Linux, Apache, MySQL, PHP</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDev;
