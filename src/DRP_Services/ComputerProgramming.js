import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Computer.css";
import programmingImage from "../images/child.jpg"; // Import your image

const ComputerProgramming = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-programming">
        {/* Hero Section */}
        <div className="hero-section-programming">
          <img
            src={programmingImage}
            alt="Computer Programming"
            className="hero-image-programming"
          />
          <div className="hero-text-programming">
            <h1 className="hero-title-programming">Computer Programming</h1>
            <p className="hero-subtitle-programming">
              The art of creating instructions for computers to solve problems
              and build innovative solutions.
            </p>
          </div>
        </div>

        {/* Key Aspects Section */}
        <div className="content-wrapper-programming">
          <h2 className="section-title-programming">
            Key Aspects of Computer Programming
          </h2>
          <div className="grid-container-programming">
            {/* Programming Languages */}
            <div className="aspect-card-programming">
              <h3 className="card-title-programming">Programming Languages</h3>
              <p className="card-description-programming">
                Languages like Python, Java, C++, and JavaScript are commonly
                used to write code. Each language has its strengths and is
                suited to particular types of tasks.
              </p>
              <div className="languages-list-programming">
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
                <span>JavaScript</span>
              </div>
            </div>

            {/* Development Process */}
            <div className="aspect-card-programming">
              <h3 className="card-title-programming">Development Process</h3>
              <ul className="process-list-programming">
                <li>Designing Algorithms</li>
                <li>Writing Code</li>
                <li>Testing and Debugging</li>
                <li>Maintenance</li>
              </ul>
            </div>

            {/* Applications */}
            <div className="aspect-card-programming">
              <h3 className="card-title-programming">Applications</h3>
              <p className="card-description-programming">
                Programming is used in various fields, including web
                development, mobile app development, game development, data
                analysis, artificial intelligence, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComputerProgramming;
