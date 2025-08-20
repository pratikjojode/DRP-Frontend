import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/LeaderShip.css";
import vishal from "../images/vishalpatil.jpg";
import drpatil from "../images/drpatil.jpg";

const leaders = [
  {
    id: 1,
    name: "Dr. D. R. Patil",
    title: "Founder",
    image: drpatil,
    description:
      "With over 40 years of experience in the medical field, Dr. D. R. Patil brings a unique blend of expertise, innovation, and leadership to the world of technology and business. Leveraging a deep understanding of problem-solving and strategic development.",
  },
  // {
  //   id: 2,
  //   name: "Vishal Patil",
  //   title: "Co-founder & CEO",
  //   image: vishal,
  //   description:
  //     "Vishal is a highly accomplished Academic Professor with over 16 years of experience in training, including a decade of teaching at renowned colleges. He has extensive expertise in the entire product lifecycle and has served as a hands-on architect. At DRP Group, he oversees strategy, technology, and business development. Vishal holds a Master's degree in Computer Engineering and an MBA in Business Analysis from SPPU Pune. Vishal has founded a dynamic enterprise encompassing three key sectors:\n • Software Services\n • Consultancy\n • Computer Training Centre. Driven by a vision to bridge technology, education, and business excellence, Vishal is committed to fostering innovation, skill development, and digital transformation.",
  // },
];

const LeaderShip = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="leadership-wrapper">
        <h2 className="leadership-heading">
          Leadership <span>Team</span>
        </h2>

        {/* Single-column Layout for Cards */}
        <div className="leadership-container">
          {leaders.map((leader) => (
            <div key={leader.id} className="leadership-card">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-img"
              />
              <h3 className="leader-name">{leader.name}</h3>
              <p className="leader-title">{leader.title}</p>
              <p className="leader-description">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LeaderShip;
