import React from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/Europe.css"; // Importing the separate CSS file
import europeBanner1 from "../images/european.jpg";
import europeBanner2 from "../images/euroen2.jpg";
import { Carousel } from "antd"; // Ant Design carousel

const Europe = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel autoplay>
          <div>
            <img
              src={europeBanner1}
              alt="European Education"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src={europeBanner2}
              alt="European Universities"
              className="carousel-image"
            />
          </div>
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="europe-container">
        <h1 className="main-heading">
          Education Systems in European Countries
        </h1>
        <p className="paragraph">
          Education in European countries is diverse, with each nation having
          its own approach to learning, higher education, and vocational
          training. However, most European countries emphasize accessible,
          high-quality education, and many offer free or subsidized schooling.
          The Bologna Process standardizes higher education across Europe,
          making degrees more comparable and facilitating student mobility.
        </p>

        <h2 className="sub-heading">Education Systems by Country</h2>
        <ul className="education-list">
          <li>
            <strong>Finland</strong> – Focuses on student well-being, minimal
            standardized testing, and highly qualified teachers. Education is
            free at all levels.
          </li>
          <li>
            <strong>Germany</strong> – Offers free higher education and is known
            for its dual education system.
          </li>
          <li>
            <strong>France</strong> – Has a centralized education system with
            free public education and elite Grandes Écoles.
          </li>
          <li>
            <strong>Netherlands</strong> – Encourages creativity and critical
            thinking with many English-taught programs.
          </li>
          <li>
            <strong>Sweden</strong> – Provides free education to EU/EEA citizens
            and promotes research-based learning.
          </li>
          <li>
            <strong>United Kingdom</strong> – Home to prestigious universities
            like Oxford and Cambridge.
          </li>
          <li>
            <strong>Switzerland</strong> – Excels in vocational education
            alongside academic pathways.
          </li>
          <li>
            <strong>Norway</strong> – Offers free education at public
            universities and prioritizes inclusivity.
          </li>
          <li>
            <strong>Italy</strong> – Home to some of the world’s oldest
            universities, following the Bologna Process.
          </li>
          <li>
            <strong>Spain</strong> – Provides free public education with a mix
            of traditional and modern teaching methods.
          </li>
        </ul>

        <h2 className="sub-heading">Top Universities in European Countries</h2>
        <p className="paragraph">
          Europe is home to some of the world's best universities, known for
          their academic excellence, research output, and global impact.
        </p>
        <ul className="education-list">
          <li>
            <strong>United Kingdom</strong> – Oxford, Cambridge, Imperial
            College London, UCL.
          </li>
          <li>
            <strong>Switzerland</strong> – ETH Zurich, EPFL.
          </li>
          <li>
            <strong>Germany</strong> – LMU Munich, Technical University of
            Munich, Heidelberg University.
          </li>
          <li>
            <strong>France</strong> – Sorbonne University, ENS Paris, PSL
            University.
          </li>
          <li>
            <strong>Netherlands</strong> – University of Amsterdam, TU Delft.
          </li>
          <li>
            <strong>Sweden</strong> – Karolinska Institute, Lund University.
          </li>
          <li>
            <strong>Italy</strong> – University of Bologna, Sapienza University
            of Rome.
          </li>
          <li>
            <strong>Spain</strong> – University of Barcelona, Autonomous
            University of Madrid.
          </li>
          <li>
            <strong>Denmark</strong> – University of Copenhagen.
          </li>
          <li>
            <strong>Norway</strong> – University of Oslo.
          </li>
        </ul>

        <p className="conclusion">
          European countries continuously invest in education as a key driver of
          economic and social development. Their systems emphasize quality,
          accessibility, and global competitiveness, making Europe a top
          destination for students worldwide.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Europe;
