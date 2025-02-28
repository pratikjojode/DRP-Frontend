import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Mscit.css";
import mscitImage from "../images/imart2-jpg.jpg"; // Import your image

const MSCIT = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-mscit">
        {/* Hero Section */}
        <div className="hero-section-mscit">
          <img
            src={mscitImage}
            alt="MS-CIT Program"
            className="hero-image-mscit"
          />
          <div className="hero-text-mscit">
            <h1 className="hero-title-mscit">
              Maharashtra State Certificate in Information Technology (MS-CIT)
            </h1>
            <p className="hero-subtitle-mscit">
              Bridging the digital divide with essential IT skills for personal,
              professional, and social applications.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="content-wrapper-mscit">
          <h2 className="section-title-mscit">
            Benefits of Enrolling in MS-CIT
          </h2>
          <div className="grid-container-mscit">
            {[
              {
                icon: "💻",
                title: "Enhanced Digital Literacy",
                desc: "Gain proficiency in using computers and the internet, essential for modern-day tasks.",
              },
              {
                icon: "🚀",
                title: "Career Advancement",
                desc: "Improves job readiness and opens up opportunities in various sectors.",
              },
              {
                icon: "🌟",
                title: "Personal Empowerment",
                desc: "Boosts confidence in navigating digital platforms for daily activities.",
              },
            ].map((benefit, index) => (
              <div key={index} className="benefit-card-mscit">
                <div className="benefit-icon-mscit">{benefit.icon}</div>
                <h3 className="card-title-mscit">{benefit.title}</h3>
                <p className="card-description-mscit">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MSCIT;
