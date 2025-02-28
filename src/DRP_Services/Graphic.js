import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Graphic.css";
import graphicDesignImage from "../images/graphic.jpg"; // Add your image path

const Graphic = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="graphic-page">
        {/* Hero Section */}
        <div className="graphic-hero">
          <img
            src={graphicDesignImage}
            alt="Graphic Design"
            className="graphic-hero-image"
          />
          <h1 className="graphic-title">
            Graphic Design: The Art of Visual Communication
          </h1>
          <p className="graphic-subtitle">
            A creative discipline blending visuals, typography, and layout to
            communicate ideas.
          </p>
        </div>

        {/* Content Section */}
        <div className="graphic-content">
          <h2 className="graphic-section-title">
            Key Aspects of Graphic Design
          </h2>
          <div className="graphic-grid">
            {[
              {
                title: "Typography",
                desc: "The art of arranging type to make written language legible, readable, and visually appealing.",
              },
              {
                title: "Color Theory",
                desc: "Understanding how colors interact and their psychological impact to evoke specific emotions or responses.",
              },
              {
                title: "Layout & Composition",
                desc: "Organizing visual elements harmoniously to guide the viewer's eye and enhance the message.",
              },
              {
                title: "Imagery",
                desc: "Utilizing photographs, illustrations, and graphics to support and enrich the content.",
              },
            ].map((aspect, index) => (
              <div key={index} className="graphic-card">
                <h3 className="graphic-card-title">{aspect.title}</h3>
                <p className="graphic-card-desc">{aspect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Graphic;
