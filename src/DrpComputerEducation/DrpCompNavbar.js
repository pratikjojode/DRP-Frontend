import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/DrpCompNavbar.css";
import complog from "../images/DRP_bann_new_comp.png";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";

const DrpCompNavbar = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [openCourse, setOpenCourse] = useState(false);
  const [certificationsDropdown, setCertificationsDropdown] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/contact-form-drp-register",
        values
      );
      message.success(
        response.data.message || "Application submitted successfully!"
      );
      form.resetFields();
      setIsModalVisible(false);
      setMenuOpen(false);
    } catch (error) {
      message.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const location = useLocation();

  const handleDropdownToggle = (dropdownName) => {
    if (dropdownName === "course") {
      setOpenCourse((prev) => !prev);
      setCertificationsDropdown(false);
      setOpenRegister(false);
    } else if (dropdownName === "certifications") {
      setCertificationsDropdown((prev) => !prev);
      setOpenCourse(false);
      setOpenRegister(false);
    } else if (dropdownName === "register") {
      setOpenRegister((prev) => !prev);
      setOpenCourse(false);
      setCertificationsDropdown(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenCourse(false);
    setCertificationsDropdown(false);
    setOpenRegister(false);
  };

  const courses = [
    {
      name: "Trending Courses",
      link: "/courses/Trending-Courses",
      subTabs: [
        "MS - CIT",
        "KLiC Tally",
        "Advanced MS - Office",
        "CIA - Trending Course",
        "ACIP",
        "CBA",
        "Advanced Tally",
        "Advanced Excel",
      ],
    },
    {
      name: "Computer Programming",
      link: "/courses/Computer-Programming",
      subTabs: [
        "Computer Programming - All in one",
        "C Programming",
        "C++ Programming",
        "Python Programming",
        "Advanced Python Programming",
        "Core Java",
        "Advanced Java",
        "C#",
        "ASP.Net",
        "HTML & CSS",
        "SQL",
        "My SQL",
      ],
    },
    {
      name: "New Courses",
      link: "/courses/new-courses",
      subTabs: [
        "3D Character Animation",
        "Share Market",
        "SAP Course",
        "Data Science",
      ],
    },
    {
      name: "Hardware Course",
      link: "/courses/Hardware-Course",
      subTabs: ["Computer Repairing", "Mobile Repairing"],
    },
    {
      name: "Graphic Designing",
      link: "/courses/Graphic-Designing",
      subTabs: [
        "Graphic Design",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe In Design",
      ],
    },
    {
      name: "Marketing & Video Editing",
      link: "/courses/Marketing-Video-Editing",
      subTabs: [
        "Digital Marketing",
        "Video Editing",
        "Adobe Premier Pro",
        "Adobe After Effects",
      ],
    },
    {
      name: "AutoDesk CAD",
      link: "/courses/AutoDesk-CAD",
      subTabs: [
        "AutoDesk CAD",
        "AutoCAD",
        "AutoCad Mechanical",
        "AutoCad Civil",
        "3Ds Max",
        "Revit",
        "Revit MEP",
        "V-Ray",
      ],
    },
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="drp-overlay active" onClick={closeMenu}></div>
      )}

      <nav className="drp-navbar">
        {/* Logo */}
        <div className="drp-logo">
          <Link to="/drpComputerEducation">
            <img src={complog} alt="DRP Computer Education" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="drp-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`drp-nav-links ${menuOpen ? "active" : ""}`}>
          {/* Close icon for mobile */}
          <div className="drp-close-icon" onClick={closeMenu}>
            ✕
          </div>

          <li
            className={`drp-nav-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/" className="drp-nav-link" onClick={closeMenu}>
              Welcome!
            </Link>
          </li>
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpComputerEducation" ? "active" : ""
            }`}
          >
            <Link
              to="/drpComputerEducation"
              className="drp-nav-link"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          {/* Courses Dropdown (Mega Menu) */}
          <li
            className={`drp-dropdown ${
              location.pathname.includes("/courses") ? "active" : ""
            } ${openCourse ? "open" : ""}`}
            onMouseEnter={() => !menuOpen && setOpenCourse(true)}
            onMouseLeave={() => !menuOpen && setOpenCourse(false)}
          >
            <button
              className="drp-dropbtn"
              onClick={() => menuOpen && handleDropdownToggle("course")}
            >
              Courses
            </button>

            <div className="drp-course-dropdown">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="drp-course-tab"
                  onMouseEnter={() => setActiveTab(index)}
                  onMouseLeave={() => setActiveTab(null)}
                >
                  <Link
                    to={course.link}
                    className="drp-course-title"
                    onClick={closeMenu}
                  >
                    {course.name}
                  </Link>

                  {(activeTab === index || menuOpen) && (
                    <div className="drp-sub-tabs">
                      {course.subTabs.map((sub, subIndex) => (
                        <div key={subIndex} className="drp-sub-tab">
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </li>

          {/* IT Certifications Dropdown */}
          <li
            className={`dropdown-sol ${
              [
                "/compTraning/ManualTesting",
                "/compTraning/AutomationTesting",
                "/compTraning/JavaFullStackDevelopment",
                "/compTraning/SalesForce",
                "/compTraning/DataScience",
                "/compTraning/RESTAPITesting",
                "/compTraning/NetFullstackDevelopment",
                "/compTraning/ReactJsDevelopment",
                "/compTraning/RPA",
                "/compTraning/Hardware&Networking",
              ].includes(location.pathname)
                ? "active"
                : ""
            } ${certificationsDropdown ? "open" : ""}`}
            onMouseEnter={() => !menuOpen && setCertificationsDropdown(true)}
            onMouseLeave={() => !menuOpen && setCertificationsDropdown(false)}
          >
            <span
              className="dropdown-toggle-sol"
              onClick={() => menuOpen && handleDropdownToggle("certifications")}
            >
              IT Certifications
            </span>

            <ul className="dropdown-menu-sol">
              <li
                className={
                  location.pathname === "/compTraning/ManualTesting"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/ManualTesting" onClick={closeMenu}>
                  Manual Testing
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/AutomationTesting"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/AutomationTesting" onClick={closeMenu}>
                  Automation Testing (Python Or Java Selenium)
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/JavaFullStackDevelopment"
                    ? "active"
                    : ""
                }
              >
                <Link
                  to="/compTraning/JavaFullStackDevelopment"
                  onClick={closeMenu}
                >
                  Java Full Stack Development
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/SalesForce"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/SalesForce" onClick={closeMenu}>
                  SalesForce
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/DataScience"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/DataScience" onClick={closeMenu}>
                  Data Science
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/RESTAPITesting"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/RESTAPITesting" onClick={closeMenu}>
                  REST API Testing
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/NetFullstackDevelopment"
                    ? "active"
                    : ""
                }
              >
                <Link
                  to="/compTraning/NetFullstackDevelopment"
                  onClick={closeMenu}
                >
                  .Net Full Stack Development
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/ReactJsDevelopment"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/ReactJsDevelopment" onClick={closeMenu}>
                  React Js Development
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/RPA" ? "active" : ""
                }
              >
                <Link to="/compTraning/RPA" onClick={closeMenu}>
                  RPA (Robotic Process Automation)
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/compTraning/Hardware&Networking"
                    ? "active"
                    : ""
                }
              >
                <Link to="/compTraning/Hardware&Networking" onClick={closeMenu}>
                  Hardware & Networking (CCNA, CCIE, CCNP)
                </Link>
              </li>
            </ul>
          </li>

          {/* Register Dropdown */}
          <li
            className={`drp-dropdown ${
              location.pathname === "/register" ? "active" : ""
            } ${openRegister ? "open" : ""}`}
            onMouseEnter={() => !menuOpen && setOpenRegister(true)}
            onMouseLeave={() => !menuOpen && setOpenRegister(false)}
          >
            <button
              className="drp-dropbtn"
              onClick={() => menuOpen && handleDropdownToggle("register")}
            >
              Register
            </button>
            <div className="drp-dropdown-content">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  showModal();
                  closeMenu();
                }}
              >
                Drp Computer Education
                <br /> And training Institute
              </Link>
            </div>
          </li>

          {/* About & Contact */}
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpCompAbout" ? "active" : ""
            }`}
          >
            <Link
              to="/drpCompAbout"
              className="drp-nav-link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpcompContact" ? "active" : ""
            }`}
          >
            <Link
              to="/drpcompContact"
              className="drp-nav-link"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Modal
        title="Register for DRP Computer Education & Training Institute"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            serviceName: "DRP Computer Education & Training Institute",
          }}
          className="apply-form"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            className="form-item"
          >
            <Input placeholder="Enter your name" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
                type: "email",
              },
            ]}
            className="form-item"
          >
            <Input placeholder="Enter your email" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="contact"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
            className="form-item"
          >
            <Input
              placeholder="Enter your phone number"
              className="input-field"
            />
          </Form.Item>

          <Form.Item
            label="Select Service"
            name="serviceName"
            className="form-item"
          >
            <Select className="select-field">
              <Option value="DRP Computer Education & Training Institute">
                DRP Computer Education & Training Institute
              </Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="submit-btn"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DrpCompNavbar;
