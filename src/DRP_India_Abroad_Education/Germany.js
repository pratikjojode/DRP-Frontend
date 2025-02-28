import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";

// Import University Images (You can replace these with actual German university images)
import tumImage from "../images/tum.jpeg";
import lmuMunichImage from "../images/lmu-munich.jpg";
import heidelbergImage from "../images/heidelberg.jpeg";
import humboldtBerlinImage from "../images/fernando-garrido-Hklr8CMpkww-unsplash.jpg";
import bonnImage from "../images/bonn.jpeg";
import rwthAachenImage from "../images/rwt.jpg";
import chariteBerlinImage from "../images/cha.jpg";
import tubingenImage from "../images/tubingen.jpg";
import fuBerlinImage from "../images/fuberlin.jpeg";
import gottingenImage from "../images/gottingen.jpg";

const universities = [
  {
    name: "Technical University of Munich",
    location: "Munich, Germany",
    image: tumImage,
  },
  { name: "LMU Munich", location: "Munich, Germany", image: lmuMunichImage },
  {
    name: "Universität Heidelberg",
    location: "Heidelberg, Germany",
    image: heidelbergImage,
  },
  {
    name: "Humboldt University of Berlin",
    location: "Berlin, Germany",
    image: humboldtBerlinImage,
  },
  { name: "University of Bonn", location: "Bonn, Germany", image: bonnImage },
  {
    name: "RWTH Aachen University",
    location: "Aachen, Germany",
    image: rwthAachenImage,
  },
  {
    name: "Charité - Universitätsmedizin Berlin",
    location: "Berlin, Germany",
    image: chariteBerlinImage,
  },
  {
    name: "University of Tübingen",
    location: "Tübingen, Germany",
    image: tubingenImage,
  },
  {
    name: "Free University of Berlin",
    location: "Berlin, Germany",
    image: fuBerlinImage,
  },
  {
    name: "University of Göttingen",
    location: "Göttingen, Germany",
    image: gottingenImage,
  },
];

const Germany = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="country-container">
        <h1 className="title">Top Universities in Germany</h1>
        <p>
          The German education system emphasizes creativity and innovation,
          making it an excellent environment for students to learn. It comprises
          three main types of schools: public schools (free), private schools
          (tuition-based), and vocational schools (often funded by employers).
          Education is compulsory for children aged six to 16, with the state
          covering the costs of public schools. While private schools are
          optional, they often provide enhanced educational opportunities.
          Vocational schools serve as an alternative to university, with funding
          available through employers, loans, or scholarships.
        </p>
        <p>
          Germany's education system differs significantly from those in other
          countries, with classes conducted in both German and English. Public
          universities are government-funded and either charge no tuition fees
          or require only a small administrative fee each academic year. In
          contrast, private universities rely on student tuition fees and can be
          considerably more expensive. Germany has a higher number of public
          universities than private ones, reflecting its commitment to
          accessible education. German law ensures that education remains
          affordable and available to all.
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

export default Germany;
