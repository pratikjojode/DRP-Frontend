import React from "react";
import "../styles/Company.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBuilding,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Company = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="company-container">
        <div className="company-content">
          <h1 className="company-title">
            <FaBuilding className="icon" /> Welcome to <span>DRP Group</span>
          </h1>

          <p className="company-description">
            The <strong>DRP Group</strong>, founded by{" "}
            <strong>Dr. D. R. Patil</strong>, is a dynamic organization based in{" "}
            <strong>Maharashtra, India</strong>, with a strong presence both
            nationally and internationally. We specialize in{" "}
            <strong>
              Education Consultancy, Recruitment Services, Software Solutions,
              and Computer Training
            </strong>
            , providing comprehensive support for students, job seekers, and
            businesses.
          </p>

          <h2 className="subsidiaries-title">
            <MdOutlineBusinessCenter className="icon" /> Our Subsidiaries
          </h2>

          <div className="subsidiaries">
            <div className="subsidiary">
              <h3>
                <FaUsers className="icon" /> DRP India & Abroad Education and
                Recruitment Services
              </h3>
              <p>
                Providing expert guidance for students and professionals with
                career counseling, job placements, and global education
                opportunities.
              </p>
            </div>
            <div className="subsidiary">
              <h3>
                <FaLaptopCode className="icon" /> DRP Software Solutions Pvt Ltd
              </h3>
              <p>
                Delivering cutting-edge digital solutions tailored to business
                needs, helping organizations enhance technology infrastructure
                and streamline operations.
              </p>
            </div>
            <div className="subsidiary">
              <h3>
                <FaChalkboardTeacher className="icon" /> DRP Computer Education
                and Training Institute
              </h3>
              <p>
                Equipping individuals with essential technical skills through
                comprehensive training programs for success in the digital
                world.
              </p>
            </div>
          </div>

          <p className="company-conclusion">
            <FaBuilding className="icon" /> Together, we foster{" "}
            <strong>innovation, expertise, and digital empowerment</strong> to
            drive success across industries.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
