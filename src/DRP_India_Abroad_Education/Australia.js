import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import melbourneImage from "../images/melbourne.jpg";
import sydneyImage from "../images/sydney.jpg";
import unswImage from "../images/unsw.jpg";
import anuImage from "../images/anu.jpg";
import monashImage from "../images/monash.jpg";
import queenslandImage from "../images/queenland.png";
import westernAustraliaImage from "../images/westerrr.jpg";
import adelaideImage from "../images/adelai.jpeg";
import utsImage from "../images/uts.jpg";
import rmitImage from "../images/rmit.jpg";

const universities = [
  {
    name: "The University of Melbourne",
    location: "Melbourne, Victoria, Australia",
    image: melbourneImage,
  },
  {
    name: "The University of Sydney",
    location: "Sydney, New South Wales, Australia",
    image: sydneyImage,
  },
  {
    name: "The University of New South Wales (UNSW Sydney)",
    location: "Sydney, New South Wales, Australia",
    image: unswImage,
  },
  {
    name: "Australian National University (ANU)",
    location: "Canberra, Australian Capital Territory, Australia",
    image: anuImage,
  },
  {
    name: "Monash University",
    location: "Melbourne, Victoria, Australia",
    image: monashImage,
  },
  {
    name: "The University of Queensland",
    location: "Brisbane, Queensland, Australia",
    image: queenslandImage,
  },
  {
    name: "The University of Western Australia",
    location: "Perth, Western Australia, Australia",
    image: westernAustraliaImage,
  },
  {
    name: "The University of Adelaide",
    location: "Adelaide, South Australia, Australia",
    image: adelaideImage,
  },
  {
    name: "University of Technology Sydney",
    location: "Sydney, New South Wales, Australia",
    image: utsImage,
  },
  {
    name: "RMIT University",
    location: "Melbourne, Victoria, Australia",
    image: rmitImage,
  },
];

const Australia = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="country-container">
        <h1 className="title">Top Universities in Australia</h1>
        <p>
          Australia offers numerous advantages for international students,
          making it a highly desirable study destination. One of the key
          attractions is its cost-effective education, supported by over 100,000
          scholarships. Beyond financial support, several other factors make
          studying in Australia appealing:
        </p>
        <ul>
          <li>
            Australian higher education qualifications are globally recognized
            and widely accepted.
          </li>
          <li>
            Many courses integrate practical experience, allowing students to
            gain professional skills while studying.
          </li>
          <li>
            All 38 Australian universities provide internship and full-time job
            opportunities through their dedicated job portals.
          </li>
          <li>
            International students can work more than 40 hours per fortnight
            part-time and are permitted to work full-time during holidays.
          </li>
          <li>
            Every six to seven months, Australia adds over 64,000 new job
            opportunities, ensuring a strong job market for international
            students.
          </li>
        </ul>
        <p>
          These factors collectively make Australia an attractive and rewarding
          destination for higher education.
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

export default Australia;
