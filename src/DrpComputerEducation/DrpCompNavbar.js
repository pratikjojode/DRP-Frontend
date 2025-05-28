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

  const [openCourse, setOpenCourse] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [certificationsDropdown, setCertificationsDropdown] = useState(false);
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
        "1.AutoDesk CAD",
        "2.AutoCAD",
        "3.AutoCad Mechanical",
        "4.AutoCad Civil",
        "5.3Ds Max",
        "6.Revit",
        "7.Revit MEP",
        "8.V-Ray",
      ],
    },
  ];

  return (
    <>
      <nav className="drp-navbar">
        {/* Logo */}
        <div className="drp-logo">
          <Link to="/drpComputerEducation">
            <img src={complog} alt="" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="drp-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`drp-nav-links ${menuOpen ? "active" : ""}`}>
          <li
            className={`drp-nav-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/" className="drp-nav-link">
              Welcome!
            </Link>
          </li>
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpComputerEducation" ? "active" : ""
            }`}
          >
            <Link to="/drpComputerEducation" className="drp-nav-link">
              Home
            </Link>
          </li>
          {/* Courses Dropdown */}
          <li
            className={`drp-dropdown ${
              location.pathname.includes("/courses") ? "active" : ""
            }`}
            onMouseEnter={() => setOpenCourse(true)}
            onMouseLeave={() => setOpenCourse(false)}
          >
            <button className="drp-dropbtn">Courses▼</button>

            {openCourse && (
              <div className="drp-course-dropdown">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="drp-course-tab"
                    onMouseEnter={() => setActiveTab(index)}
                    onMouseLeave={() => setActiveTab(null)}
                  >
                    <Link to={course.link} className="drp-course-title">
                      {course.name}
                    </Link>

                    {activeTab === index && (
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
            )}
          </li>
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
            }`}
            onMouseEnter={() => setCertificationsDropdown(true)}
            onMouseLeave={() => setCertificationsDropdown(false)}
          >
            <span className="dropdown-toggle-sol">IT Certifications▼</span>
            {certificationsDropdown && (
              <ul className="dropdown-menu-sol">
                <li
                  className={
                    location.pathname === "/compTraning/ManualTesting"
                      ? "active"
                      : ""
                  }
                >
                  <Link
                    to="/compTraning/ManualTesting"
                    onClick={() => setMenuOpen(false)}
                  >
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
                  <Link
                    to="/compTraning/AutomationTesting"
                    onClick={() => setMenuOpen(false)}
                  >
                    Automation Testing (Python Or Java Selenium)
                  </Link>
                </li>
                <li
                  className={
                    location.pathname ===
                    "/compTraning/JavaFullStackDevelopment"
                      ? "active"
                      : ""
                  }
                >
                  <Link
                    to="/compTraning/JavaFullStackDevelopment"
                    onClick={() => setMenuOpen(false)}
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
                  <Link
                    to="/compTraning/SalesForce"
                    onClick={() => setMenuOpen(false)}
                  >
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
                  <Link
                    to="/compTraning/DataScience"
                    onClick={() => setMenuOpen(false)}
                  >
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
                  <Link
                    to="/compTraning/RESTAPITesting"
                    onClick={() => setMenuOpen(false)}
                  >
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
                    onClick={() => setMenuOpen(false)}
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
                  <Link
                    to="/compTraning/ReactJsDevelopment"
                    onClick={() => setMenuOpen(false)}
                  >
                    React Js Development
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === "/compTraning/RPA" ? "active" : ""
                  }
                >
                  <Link
                    to="/compTraning/RPA"
                    onClick={() => setMenuOpen(false)}
                  >
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
                  <Link
                    to="/compTraning/Hardware&Networking"
                    onClick={() => setMenuOpen(false)}
                  >
                    Hardware & Networking (CCNA, CCIE, CCNP)
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Register Dropdown */}
          <li
            className={`drp-dropdown ${
              location.pathname === "/register" ? "active" : ""
            }`}
          >
            <button className="drp-dropbtn">Register▼</button>
            <div className="drp-dropdown-content">
              <Link
                to=""
                className={location.pathname === "/" ? "active" : ""}
                onClick={showModal}
              >
                Drp Computer Education And training Institute
              </Link>
            </div>
          </li>

          {/* About & Contact */}
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpCompAbout" ? "active" : ""
            }`}
          >
            <Link to="/drpCompAbout" className="drp-nav-link">
              About
            </Link>
          </li>
          <li
            className={`drp-nav-item ${
              location.pathname === "/drpcompContact" ? "active" : ""
            }`}
          >
            <Link to="/drpcompContact" className="drp-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Modal
        title="Register for  DRP Computer Education & Training Institute"
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
            serviceName: " DRP Computer Education & Training Institute",
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
