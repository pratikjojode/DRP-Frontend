import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaCode,
  FaCloud,
  FaComments,
  FaTools,
} from "react-icons/fa";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import "../styles/Drpsolabout.css";
import aboutImage from "../images/abb.webp"; // Add your image path

const DrpSoftwareAbout = () => {
  return (
    <>
      <DrpSolHeader />
      <DrpSoftwareNavbar />

      <div className="about-container">
        {/* Top Image */}
        <div className="about-image-container">
          <img
            src={aboutImage}
            alt="About DRP Software Solutions"
            className="about-image"
          />
        </div>

        {/* Vision Section */}
        <section className="section vision">
          <h2>🚀 Our Vision</h2>
          <p>
            To be a global leader in providing innovative and reliable software
            solutions that enable businesses to reach their full potential.
          </p>
          <br />
          <h3>
            At DRP Software Solutions Pvt Ltd, we don't just build software—we
            build partnerships that last, offering long-term support and growth
            to your business
          </h3>
        </section>

        {/* Values Section */}
        <section className="section values">
          <h2>🌟 Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <FaLightbulb className="icon" />
              <h3>Innovation</h3>
              <p>
                We strive to stay at the forefront of technology to provide
                solutions that push the boundaries of what's possible.
              </p>
            </div>
            <div className="value-item">
              <FaUsers className="icon" />
              <h3>Collaboration</h3>
              <p>
                We work closely with our clients to understand their needs and
                deliver tailored solutions.
              </p>
            </div>
            <div className="value-item">
              <FaShieldAlt className="icon" />
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of professionalism,
                transparency, and ethics.
              </p>
            </div>
            <div className="value-item">
              <FaStar className="icon" />
              <h3>Excellence</h3>
              <p>
                We are dedicated to delivering high-quality products that exceed
                expectations.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section services">
          <h2>💻 What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaCode className="icon" />
              <h3>Custom Software Development</h3>
              <p>
                Tailored solutions for your business, including web and mobile
                apps.
              </p>
            </div>
            <div className="service-item">
              <FaCloud className="icon" />
              <h3>Cloud Solutions</h3>
              <p>
                Leverage cloud computing for scalability, security, and
                flexibility.
              </p>
            </div>
            <div className="service-item">
              <FaComments className="icon" />
              <h3>Consulting Services</h3>
              <p>Expert guidance to navigate complex IT challenges.</p>
            </div>
            <div className="service-item">
              <FaTools className="icon" />
              <h3>Support & Maintenance</h3>
              <p>
                Ongoing support to keep your software updated and running
                smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section why-choose">
          <h2>🔥 Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Experienced Team:</strong> Skilled developers, designers,
              and engineers with years of industry experience.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> We put our clients at
              the heart of everything we do.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Successfully partnering with
              businesses of all sizes.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DrpSoftwareAbout;
