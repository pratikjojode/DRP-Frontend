import React from "react";
import {
  FaCloud,
  FaMobileAlt,
  FaLaptopCode,
  FaServer,
  FaBug,
  FaHandshake,
  FaBusinessTime,
  FaDesktop,
} from "react-icons/fa";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import "../styles/SoftwareDevelopmentSol.css";
import softwareImage from "../images/dev.webp";
const services = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description:
      "We specialize in developing bespoke software solutions tailored to meet your specific business requirements.",
    points: [
      "Tailored software solutions",
      "Agile development process",
      "Scalable architecture",
      "Usability, performance, and security",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Unlock the full potential of cloud technology with our cloud-based solutions.",
    points: [
      "Cloud strategy and migration",
      "Seamless integration",
      "Enhanced data security",
      "Cost-effective scalability",
    ],
  },
  {
    icon: <FaBusinessTime />,
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance on leveraging technology to achieve business goals.",
    points: [
      "Strategic IT planning",
      "Digital transformation",
      "System integration",
      "Emerging technology advice",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "End-to-end mobile app development services for iOS and Android.",
    points: [
      "Custom iOS and Android apps",
      "User-centric design",
      "Backend integration",
      "Ongoing support",
    ],
  },
  {
    icon: <FaDesktop />,
    title: "Web Development",
    description: "Powerful online presence with our web development services.",
    points: [
      "Custom website design",
      "E-commerce solutions",
      "Responsive design",
      "SEO optimization",
    ],
  },
  {
    icon: <FaBug />,
    title: "Software Testing & QA",
    description: "Ensure reliability, functionality, and performance.",
    points: [
      "Manual and automated testing",
      "Security and usability testing",
      "Bug tracking",
      "High-quality user experience",
    ],
  },
  {
    icon: <FaHandshake />,
    title: "Maintenance & Support",
    description: "Ongoing software maintenance and support services.",
    points: [
      "Regular updates",
      "Bug fixes",
      "Customer support",
      "24/7 monitoring",
    ],
  },
  {
    icon: <FaServer />,
    title: "Enterprise Solutions",
    description: "Streamlining operations with custom enterprise software.",
    points: [
      "Custom ERP and CRM",
      "System integration",
      "Process automation",
      "Data analytics",
    ],
  },
];

const SoftwareDevelopmentSol = () => {
  return (
    <>
      <DrpSolHeader />
      <DrpSoftwareNavbar />
      <div className="software-container">
        <img
          src={softwareImage}
          alt="Software Development"
          className="banner-image"
        />
        <h1 className="main-title">Software Development Solutions</h1>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h2 className="service-title">
                {service.icon} {service.title}
              </h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopmentSol;
