import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import edu from "../images/DRP_letterhead.png"; // Import the new image
import cardImage1 from "../../src/images/Picsart_25-02-11_12-48-40-307.jpg";
import cardImage2 from "../../src/images/WhatsApp Image 2025-02-11 at 13.06.23_6f7d264e.jpg";
import cardImage3 from "../../src/images/Picsart_25-02-11_12-51-45-345.jpg";
import InquiryFormModal from "../components/InquiryFormModal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import eduhome from "../images/DRP_abroad21.png";
import sol from "../images/DRP_sol2.png";
import ee from "../images/DRP_edu3.png";
const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");

  const showModal = (title) => {
    setCourseTitle(title);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="content">
        <h1>
          Welcome to <span className="smaller-text">SAAR</span>
          DRP Group
        </h1>
        <p>
          The <span className="more-small">SAAR</span>DRP Group, founded by{" "}
          <span className="dr">Dr. D. R. Patil</span>, is a dynamic organization
          based in Maharashtra, India, with a strong presence both nationally
          and internationally. We specialize in education consultancy,
          recruitment services, software solutions, and computer training,
          ensuring global accessibility and excellence.
        </p>
      </div>

      <div className="card-container">
        {[
          {
            icon: eduhome,
            title: (
              <>
                <span style={{ fontSize: "0.8em" }}>SAAR</span>DRP India &
                Abroad Education and Recruitment Services
              </>
            ),
            img: cardImage1,
            description:
              "Providing expert services for education and recruitment both in India and abroad. Helping individuals achieve their academic and professional goals.",
            link: "/drpIndia&AbroadEducation",
          },
          {
            icon: sol,
            title: (
              <>
                <span style={{ fontSize: "0.8em" }}>SAAR</span>DRP Software
                Solutions
              </>
            ),
            img: cardImage2,
            description:
              "A leading software development company offering innovative solutions and cutting-edge technologies to help businesses grow. Our expert team delivers user-friendly applications ",
            link: "/drpSoftwareSolutions&pvtltd",
          },
          {
            icon: ee,
            title: (
              <>
                <span style={{ fontSize: "0.8em" }}>SAAR</span>DRP Computer
                Education and Training Institute
              </>
            ),
            img: cardImage3,
            description:
              "Empowering the next generation of IT professionals through quality education and hands-on training in various computer technologies.",
            link: "/drpComputerEducation",
          },
        ].map((card, index) => (
          <Link
            to={card.link}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <div className="card-icon">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="card-icon-img"
                />
              </div>
              <h2>{card.title}</h2>
              <div className="card-img-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <p className="card-description">{card.description}</p>
              <button
                className="inquire-btn-1"
                onClick={(e) => {
                  e.preventDefault();
                  showModal(card.title);
                }}
              >
                Inquire Now
              </button>
              <button className="learn-more-btn-1">Learn More</button>
            </div>
          </Link>
        ))}
      </div>

      <InquiryFormModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        courseTitle={courseTitle}
      />
      <Footer />
    </>
  );
};

export default HomePage;
