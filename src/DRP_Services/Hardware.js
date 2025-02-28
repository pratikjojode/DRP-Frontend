import React from "react";
import styles from "../styles/HardwareServices.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hardwareImage from "../images/harwdware.jpg"; // Import your image

const Hardware = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-hardware">
        {/* Hero Section */}
        <div className="hero-section-hardware">
          <img
            src={hardwareImage}
            alt="Hardware and Network Services"
            className="hero-image-hardware"
          />
        </div>

        {/* Hardware Services Section */}
        <div className="content-wrapper-hardware">
          <h2 className="section-title-hardware">Hardware Services</h2>
          <div className="grid-container-hardware">
            {[
              {
                icon: "🖥️",
                title: "Server Solutions",
                desc: "Assistance with specification, procurement, installation, and support of server hardware tailored to business needs.",
              },
              {
                icon: "📡",
                title: "Networking Equipment",
                desc: "Provision and support for routers, switches, and firewalls to ensure secure and efficient data transmission.",
              },
              {
                icon: "💾",
                title: "Storage Solutions",
                desc: "Implementation of storage systems to ensure data integrity and availability.",
              },
              {
                icon: "🖱️",
                title: "Workstations and Desktops",
                desc: "Assistance in selecting and setting up desktop computers and workstations tailored to business requirements.",
              },
            ].map((service, index) => (
              <div key={index} className="service-card-hardware">
                <div className="service-icon-hardware">{service.icon}</div>
                <h3 className="card-title-hardware">{service.title}</h3>
                <p className="card-description-hardware">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Network Services Section */}
        <div className="content-wrapper-hardware">
          <h2 className="section-title-hardware">Network Services</h2>
          <div className="grid-container-hardware">
            {[
              {
                icon: "🌐",
                title: "Network Design",
                desc: "Custom network design to meet business requirements and ensure scalability.",
              },
              {
                icon: "🔧",
                title: "Network Implementation",
                desc: "Deployment of network infrastructure with a focus on security and performance.",
              },
              {
                icon: "📊",
                title: "Network Management",
                desc: "Ongoing monitoring, optimization, and troubleshooting of network systems.",
              },
              {
                icon: "🛡️",
                title: "Network Security",
                desc: "Implementation of advanced security measures to protect against threats.",
              },
            ].map((service, index) => (
              <div key={index} className="service-card-hardware">
                <div className="service-icon-hardware">{service.icon}</div>
                <h3 className="card-title-hardware">{service.title}</h3>
                <p className="card-description-hardware">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hardware;
