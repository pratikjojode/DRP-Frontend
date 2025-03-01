import React from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import styles from "../styles/DrpEduServices.css";
import { Link } from "react-router-dom";
import loan from "../images/education-abroad.jpg";
import accommodation from "../images/accomadtion.avif";
import air from "../images/flight.jpg";
import imi from "../images/imiii.jpg";
import visa from "../images/visa1.avif";
import travel from "../images/travelt.jpg";
import insurance from "../images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import simcards from "../images/simcard.png";
import forex from "../images/foreee.avif";
import Footer from "../components/Footer";
const DrpEduServices = () => {
  const services = [
    { name: "Abroad Education", link: "/service1", image: loan },
    { name: "Insurance", link: "/service2", image: insurance },
    { name: "SIM Cards", link: "/service3", image: simcards },
    { name: "Forex", link: "/service4", image: forex },
    { name: "Accommodation", link: "/service5", image: accommodation },
    { name: "Air Ticket Booking", link: "/service6", image: air },
    { name: "Student visa", link: "/service7", image: visa },
    { name: "immigration", link: "/service8", image: imi },
    { name: "Travel and Toursim", link: "/service9", image: travel },
  ];
  return (
    <>
      <Header />
      <DrpEduNavbar />

      {/* services home */}

      <div className="edu-services">
        <div className="edu-services-content">
          <h1>Services</h1>
        </div>
      </div>

      {/* card section according to grid */}
      <div className="edu-services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="grid-item">
            <img
              src={service.image}
              alt={service.name}
              className="grid-image"
            />
            <div className="grid-text">{service.name}</div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default DrpEduServices;
