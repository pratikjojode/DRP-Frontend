import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";

// Import University Images
import mitImage from "../images/MIT.jpg";
import harvardImage from "../images/harvards.jpg";
import stanfordImage from "../images/stanford.jpg";
import caltechImage from "../images/caltech.jpg";
import upennImage from "../images/upenn.jpg";
import berkeleyImage from "../images/berkeley.jpg";
import cornellImage from "../images/cornell.webp";
import chicagoImage from "../images/chicogo.jpg";
import princetonImage from "../images/princeton.jpg";
import yaleImage from "../images/yale.jpg";

const universities = [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, Massachusetts, United States",
    image: mitImage,
  },
  {
    name: "Harvard University",
    location: "Cambridge, Massachusetts, United States",
    image: harvardImage,
  },
  {
    name: "Stanford University",
    location: "Stanford, California, United States",
    image: stanfordImage,
  },
  {
    name: "California Institute of Technology (Caltech)",
    location: "Pasadena, California, United States",
    image: caltechImage,
  },
  {
    name: "University of Pennsylvania (UPenn)",
    location: "Philadelphia, Pennsylvania, United States",
    image: upennImage,
  },
  {
    name: "University of California, Berkeley (UC Berkeley)",
    location: "Berkeley, California, United States",
    image: berkeleyImage,
  },
  {
    name: "Cornell University",
    location: "Ithaca, New York, United States",
    image: cornellImage,
  },
  {
    name: "University of Chicago",
    location: "Chicago, Illinois, United States",
    image: chicagoImage,
  },
  {
    name: "Princeton University",
    location: "Princeton, New Jersey, United States",
    image: princetonImage,
  },
  {
    name: "Yale University",
    location: "New Haven, Connecticut, United States",
    image: yaleImage,
  },
];

const USA = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="country-container">
        <h1 className="title">Top Universities in the USA</h1>
        <p>
          The United States boasts some of the world's most prestigious
          universities, drawing students from across the globe. With top-tier
          research, renowned faculty, and diverse student bodies, these
          institutions provide exceptional academic opportunities.
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

export default USA;
