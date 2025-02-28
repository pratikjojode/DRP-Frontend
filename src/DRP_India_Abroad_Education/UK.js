import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";

// Import University Images (You can replace these with actual UK university images)
import lseImage from "../images/lse.jpg";
import stAndrewsImage from "../images/st-andrewsa.jpg";
import oxfordImage from "../images/oxford2.jpg";
import cambridgeImage from "../images/cambridge.webp";
import durhamImage from "../images/durham.jpg";
import imperialImage from "../images/imperial.jpg";
import uclImage from "../images/london.jpg";
import bathImage from "../images/bath.jpg";
import warwickImage from "../images/war.jpg";
import loughboroughImage from "../images/lough.jpg";

const universities = [
  {
    name: "London School of Economics and Political Science",
    location: "London, United Kingdom",
    image: lseImage,
  },
  {
    name: "University of St Andrews",
    location: "St Andrews, United Kingdom",
    image: stAndrewsImage,
  },
  {
    name: "University of Oxford",
    location: "Oxford, United Kingdom",
    image: oxfordImage,
  },
  {
    name: "University of Cambridge",
    location: "Cambridge, United Kingdom",
    image: cambridgeImage,
  },
  {
    name: "Durham University",
    location: "Durham, United Kingdom",
    image: durhamImage,
  },
  {
    name: "Imperial College London",
    location: "London, United Kingdom",
    image: imperialImage,
  },
  {
    name: "University College London",
    location: "London, United Kingdom",
    image: uclImage,
  },
  {
    name: "University of Bath",
    location: "Bath, United Kingdom",
    image: bathImage,
  },
  {
    name: "University of Warwick",
    location: "Coventry, United Kingdom",
    image: warwickImage,
  },
  {
    name: "Loughborough University",
    location: "Loughborough, United Kingdom",
    image: loughboroughImage,
  },
];

const UK = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="country-container">
        <h1 className="title">Top Universities in the UK</h1>
        <p>
          UK universities are globally recognized for their high academic
          standards, cutting-edge research, and world-class facilities. They
          equip both domestic and international students with the skills and
          knowledge needed for success after graduation. As a result, many UK
          institutions consistently rank among the top 50 in the QS World
          University Rankings and the Times Higher Education World University
          Rankings.
        </p>
        <div className="university-grid">
          {universities.map((uni, index) => (
            <div key={index} className="university-card">
              <img
                src={uni.image}
                alt={uni.name}
                className="university-image"
              />
              <h3>{uni.name}</h3>
              <p>{uni.location}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UK;
