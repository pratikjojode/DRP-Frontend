import React from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import styles from "../styles/DrpCoaching.css";
import study1 from "../images/study1.png";
import study2 from "../images/study2.png";
import study3 from "../images/study3.png";
import study4 from "../images/study4.png";
import study5 from "../images/study5.png";
import Footer from "../components/Footer";

const DrpCoaching = () => {
  const coaching = [
    {
      title: "Mathematics Coaching",
      image: study1,
      description:
        "Enhance your math skills with our expert-led coaching sessions.",
    },
    {
      title: "Science Coaching",
      image: study2,
      description:
        "Understand the world of science with interactive lessons and experiments.",
    },
    {
      title: "English Coaching",
      image: study3,
      description:
        "Improve your English skills with grammar, vocabulary, and literature classes.",
    },
    {
      title: "History Coaching",
      image: study4,
      description:
        "Learn about historical events and civilizations through engaging lessons.",
    },
    {
      title: "Computer Science Coaching",
      image: study5,
      description:
        "Master programming and computer science concepts with our expert faculty.",
    },
    {
      title: "Computer Science Coaching",
      image: study5,
      description:
        "Master programming and computer science concepts with our expert faculty.",
    },
  ];

  return (
    <>
      <Header />
      <DrpEduNavbar />

      {/* Coaching Header */}
      <div className="edu-coaching">
        <div className="edu-coaching-content">
          <h1>Coaching</h1>
        </div>
      </div>

      {/* Coaching Grid */}
      <div className="coaching-grid">
        {coaching.map((item, index) => (
          <div key={index} className="coaching-grid-item">
            <img src={item.image} alt={item.title} className="coaching-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default DrpCoaching;
