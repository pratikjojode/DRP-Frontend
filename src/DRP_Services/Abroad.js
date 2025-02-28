import React from "react";
import styles from "../styles/Abrod.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import abroadImg from "../images/abroad.jpg";

const Abroad = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="abroad-page">
        <img src={abroadImg} alt="Study Abroad" className="abroad-image" />
        <h1 className="abroad-title">Higher Education Abroad</h1>
        <p className="abroad-description">
          Studying abroad offers students access to world-class education,
          cutting-edge research, and global networking opportunities. Many
          countries are known for their prestigious universities, offering
          quality education, diverse courses, and international exposure.
          Popular destinations include the USA, UK, Canada, Australia, Germany,
          and other European and Asian countries.
        </p>

        <div className="universities-section">
          <h2 className="section-title">Top Universities Worldwide</h2>

          {/* USA */}
          <div className="country-category usa-category">
            <h3 className="country-title">United States (USA)</h3>
            <ul className="university-list">
              <li className="university-item">
                Harvard University – Law, Business, Medicine
              </li>
              <li className="university-item">
                Stanford University – Engineering, Technology, AI
              </li>
              <li className="university-item">
                Massachusetts Institute of Technology (MIT) – STEM, Computer
                Science
              </li>
              <li className="university-item">
                California Institute of Technology (Caltech) – Physics,
                Engineering
              </li>
              <li className="university-item">
                University of Chicago – Economics, Social Sciences
              </li>
            </ul>
          </div>

          {/* UK */}
          <div className="country-category uk-category">
            <h3 className="country-title">United Kingdom (UK)</h3>
            <ul className="university-list">
              <li className="university-item">
                University of Oxford – Humanities, Medicine, Law
              </li>
              <li className="university-item">
                University of Cambridge – Science, Engineering, Mathematics
              </li>
              <li className="university-item">
                Imperial College London – Medicine, Technology
              </li>
              <li className="university-item">
                London School of Economics (LSE) – Business, Economics
              </li>
              <li className="university-item">
                University College London (UCL) – Arts, Science, Medicine
              </li>
            </ul>
          </div>

          {/* Canada */}
          <div className="country-category canada-category">
            <h3 className="country-title">Canada</h3>
            <ul className="university-list">
              <li className="university-item">
                University of Toronto – Research, Medicine, AI
              </li>
              <li className="university-item">
                University of British Columbia (UBC) – Engineering,
                Environmental Sciences
              </li>
              <li className="university-item">
                McGill University – Medicine, Humanities
              </li>
              <li className="university-item">
                University of Waterloo – Computer Science, Engineering
              </li>
              <li className="university-item">
                Western University – Business, Law
              </li>
            </ul>
          </div>

          {/* Australia */}
          <div className="country-category australia-category">
            <h3 className="country-title">Australia</h3>
            <ul className="university-list">
              <li className="university-item">
                University of Melbourne – Law, Medicine
              </li>
              <li className="university-item">
                Australian National University (ANU) – Political Science,
                Research
              </li>
              <li className="university-item">
                University of Sydney – Business, Medicine
              </li>
              <li className="university-item">
                University of Queensland – Environmental Sciences
              </li>
              <li className="university-item">
                Monash University – Pharmacy, Engineering
              </li>
            </ul>
          </div>

          {/* Germany */}
          <div className="country-category germany-category">
            <h3 className="country-title">Germany</h3>
            <ul className="university-list">
              <li className="university-item">
                Technical University of Munich (TUM) – Engineering, Robotics
              </li>
              <li className="university-item">
                Ludwig Maximilian University of Munich (LMU) – Medicine, Science
              </li>
              <li className="university-item">
                Heidelberg University – Natural Sciences, Humanities
              </li>
              <li className="university-item">
                RWTH Aachen University – Mechanical Engineering
              </li>
              <li className="university-item">
                Humboldt University of Berlin – Social Sciences, History
              </li>
            </ul>
          </div>

          {/* Other Top Universities in Europe */}
          <div className="country-category europe-category">
            <h3 className="country-title">Other Top Universities in Europe</h3>
            <ul className="university-list">
              <li className="university-item">
                ETH Zurich (Switzerland) – Engineering, AI, Robotics
              </li>
              <li className="university-item">
                University of Amsterdam (Netherlands) – Social Sciences, AI
              </li>
              <li className="university-item">
                Sciences Po (France) – Political Science, Law
              </li>
              <li className="university-item">
                Stockholm University (Sweden) – Environmental Science, Economics
              </li>
            </ul>
          </div>

          {/* Asia */}
          <div className="country-category asia-category">
            <h3 className="country-title">Asia</h3>
            <ul className="university-list">
              <li className="university-item">
                National University of Singapore (NUS) – Business, AI, Medicine
              </li>
              <li className="university-item">
                Tsinghua University (China) – Engineering, Business
              </li>
              <li className="university-item">
                University of Tokyo (Japan) – Technology, Physics
              </li>
              <li className="university-item">
                Indian Institute of Science (IISc), Bangalore – Research,
                Physics
              </li>
              <li className="university-item">
                Seoul National University (SNU) (South Korea) – IT, AI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Abroad;
