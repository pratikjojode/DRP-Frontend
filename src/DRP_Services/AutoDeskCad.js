import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AutoCADImage from "../images/fernando-garrido-Hklr8CMpkww-unsplash.jpg"; // Ensure this image is placed correctly
import "../styles/autodesk.css"; // Import the custom CSS file

const AutoDeskCad = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="autodesk-container">
        <h1 className="autodesk-title">AutoDesk CAD</h1>
        <p className="autodesk-description">
          AutoDesk CAD refers to the suite of design and drafting tools
          developed by Autodesk, a leader in 3D design, engineering, and
          entertainment software. Autodesk is best known for its AutoCAD
          software, which is widely used in architecture, engineering, and
          construction for creating 2D and 3D designs.
        </p>
        <img
          src={AutoCADImage}
          alt="AutoDesk CAD Workspace"
          className="autodesk-image"
        />

        <div className="autodesk-benefits">
          <h2 className="benefits-title">Benefits of Using AutoCAD:</h2>
          <ul className="benefits-list">
            <li>
              <strong>Precision and Accuracy:</strong> AutoCAD offers highly
              accurate and detailed drafting tools.
            </li>
            <li>
              <strong>3D Capabilities:</strong> Supports both 2D and 3D design
              for complex model visualization.
            </li>
            <li>
              <strong>Industry Standard:</strong> Widely accepted across
              industries for collaboration.
            </li>
            <li>
              <strong>Customizability:</strong> Create toolsets, automate tasks,
              and enhance workflow with scripts.
            </li>
            <li>
              <strong>Cloud Collaboration:</strong> Includes cloud-based
              features for file sharing and team collaboration.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AutoDeskCad;
