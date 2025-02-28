import React from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import styles from "../styles/DrpUniversities.css";
import uni1 from "../images/MIT.jpg";
import uni2 from "../images/chicogo.jpg";
import uni3 from "../images/canada.png";
import uni4 from "../images/acomadation.png";
import uni5 from "../images/airticket.png";
import Footer from "../components/Footer";

const DrpUniversities = () => {
  const universities = [
    {
      name: "Harvard University",
      image: uni1,
      description:
        "One of the world's most prestigious universities, known for its excellence in research and education.",
    },
    {
      name: "Stanford University",
      image: uni2,
      description:
        "A leader in innovation and technology, located in the heart of Silicon Valley.",
    },
    {
      name: "Oxford University",
      image: uni3,
      description: "Renowned for its rich history and high academic standards.",
    },
    {
      name: "MIT",
      image: uni4,
      description:
        "A global leader in science, engineering, and technology education.",
    },
    {
      name: "Cambridge University",
      image: uni5,
      description:
        "One of the oldest and most prestigious universities in the world.",
    },
  ];

  return (
    <>
      <Header />
      <DrpEduNavbar />

      {/* Universities Header */}
      <div className="edu-universities">
        <div className="edu-universities-content">
          <h1>Top Universities</h1>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="universities-grid">
        {universities.map((uni, index) => (
          <div key={index} className="universities-grid-item">
            <img src={uni.image} alt={uni.name} className="university-image" />
            <h2>{uni.name}</h2>
            <p>{uni.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DrpUniversities;
