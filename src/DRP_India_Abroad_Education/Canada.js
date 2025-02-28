import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";

// Import University Images (You can replace these with actual Canadian university images)
import mcgillImage from "../images/mcgill.jpg";
import torontoImage from "../images/toronto.jpg";
import ubcImage from "../images/ubc.jpeg";
import mcmasterImage from "../images/mcmaster.jpeg";
import ottawaImage from "../images/ottawa.png";
import albertaImage from "../images/alberta.jpeg";
import dalhousieImage from "../images/dalhousie.jpeg";
import queensImage from "../images/queens.jpg";
import montrealImage from "../images/mon.jpg";
import calgaryImage from "../images/calgary.jpg";
import westernImage from "../images/western.jpg";

const universities = [
  {
    name: "McGill University",
    location: "Montreal, Quebec, Canada",
    image: mcgillImage,
  },
  {
    name: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    image: torontoImage,
  },
  {
    name: "University of British Columbia (UBC)",
    location: "Vancouver, British Columbia, Canada",
    image: ubcImage,
  },
  {
    name: "McMaster University",
    location: "Hamilton, Ontario, Canada",
    image: mcmasterImage,
  },
  {
    name: "University of Ottawa",
    location: "Ottawa, Ontario, Canada",
    image: ottawaImage,
  },
  {
    name: "University of Alberta",
    location: "Edmonton, Alberta, Canada",
    image: albertaImage,
  },
  {
    name: "Dalhousie University",
    location: "Halifax, Nova Scotia, Canada",
    image: dalhousieImage,
  },
  {
    name: "Queen’s University",
    location: "Kingston, Ontario, Canada",
    image: queensImage,
  },
  {
    name: "Université de Montréal",
    location: "Montreal, Quebec, Canada",
    image: montrealImage,
  },
  {
    name: "University of Calgary",
    location: "Calgary, Alberta, Canada",
    image: calgaryImage,
  },
  {
    name: "Western University",
    location: "London, Ontario, Canada",
    image: westernImage,
  },
];

const Canada = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="country-container">
        <h1 className="title">Top Universities in Canada</h1>
        <p>
          Canada boasts some of the world's top universities, offering
          high-quality education in a country known for its affordability,
          cleanliness, and safety. These factors make it a highly attractive
          choice for international students pursuing higher education.
        </p>
        <p>
          Whether at the undergraduate or graduate level, students in Canada
          benefit from learning under renowned experts, accessing
          state-of-the-art facilities, and enjoying excellent accommodation
          options. With nearly 31 Canadian universities ranked among the top 250
          globally, it’s no surprise that Canada remains a top destination for
          students worldwide.
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

export default Canada;
