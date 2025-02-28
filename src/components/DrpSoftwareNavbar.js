import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button, Select, Form, Input, message } from "antd";
import logoSoftware from "../images/DRP_banner4.png";
import "../styles/DrpsofwatreNavbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";

const DrpSoftwareNavbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [registerDropdown, setRegisterDropdown] = useState(false);
  const [certificationsDropdown, setCertificationsDropdown] = useState(false);
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
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown-sol");

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle-sol");
      const menu = dropdown.querySelector(".dropdown-menu-sol");

      if (window.innerWidth <= 768) {
        toggle.addEventListener("click", function (event) {
          event.preventDefault();
          menu.classList.toggle("open");
        });
      }
    });
  });

  return (
    <>
      <div className="software-navbar">
        <div className="software-navbar-main">
          <nav className="software-nav">
            <Link to="/drpSoftwareSolutions&pvtltd">
              <img src={logoSoftware} alt="DRP Solution" className="logo" />
            </Link>
            {/* Hamburger Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX size={30} color="white" />
              ) : (
                <FiMenu size={30} color="white" />
              )}
            </div>

            {/* Navigation Links */}
            <ul className={`software-navbar-ul ${menuOpen ? "open" : ""}`}>
              <li
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/">Welcome!</Link>
              </li>
              <li
                className={
                  location.pathname === "/drpSoftwareSolutions&pvtltd"
                    ? "active"
                    : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/drpSoftwareSolutions&pvtltd">Home</Link>
              </li>
              <li
                className={
                  location.pathname === "/drpsoftwareabout" ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/drpsoftwareabout">About</Link>
              </li>

              {/* Services Dropdown */}
              <li
                className={`dropdown-sol ${
                  [
                    "/softwaresol/SoftwareDevelopment",
                    "/softwaresol/Training",
                    "/softwaresol/Internship",
                    "/softwaresol/projects",
                    "/softwaresol/educ",
                  ].includes(location.pathname)
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <span className="dropdown-toggle-sol">
                  Services <FaCaretDown />
                </span>
                {servicesDropdown && (
                  <ul className="dropdown-menu-sol">
                    <li
                      className={
                        location.pathname === "/softwaresol/SoftwareDevelopment"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/SoftwareDevelopment"
                        onClick={() => setMenuOpen(false)}
                      >
                        Software Development
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/Training"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/Training"
                        onClick={() => setMenuOpen(false)}
                      >
                        Training
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/Internship"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/Internship"
                        onClick={() => setMenuOpen(false)}
                      >
                        Internship
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/projects"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/projects"
                        onClick={() => setMenuOpen(false)}
                      >
                        Projects – Diploma, BE, ME, PhD
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/educ"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/educ"
                        onClick={() => setMenuOpen(false)}
                      >
                        Educational Services
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`dropdown-sol ${
                  [
                    "/softwaresol/ManualTesting",
                    "/softwaresol/AutomationTesting",
                    "/softwaresol/JavaFullStackDevelopment",
                    "/softwaresol/SalesForce",
                    "/softwaresol/DataScience",
                    "/softwaresol/RESTAPITesting",
                    "/softwaresol/NetFullstackDevelopment",
                    "/softwaresol/ReactJsDevelopment",
                    "/softwaresol/RPA",
                    "/softwaresol/Hardware&Networking",
                  ].includes(location.pathname)
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() => setCertificationsDropdown(true)}
                onMouseLeave={() => setCertificationsDropdown(false)}
              >
                <span className="dropdown-toggle-sol">
                  IT Certifications <FaCaretDown />
                </span>
                {certificationsDropdown && (
                  <ul className="dropdown-menu-sol">
                    <li
                      className={
                        location.pathname === "/softwaresol/ManualTesting"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/ManualTesting"
                        onClick={() => setMenuOpen(false)}
                      >
                        Manual Testing
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/AutomationTesting"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/AutomationTesting"
                        onClick={() => setMenuOpen(false)}
                      >
                        Automation Testing (Python Or Java Selenium)
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname ===
                        "/softwaresol/JavaFullStackDevelopment"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/JavaFullStackDevelopment"
                        onClick={() => setMenuOpen(false)}
                      >
                        Java Full Stack Development
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/SalesForce"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/SalesForce"
                        onClick={() => setMenuOpen(false)}
                      >
                        SalesForce
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/DataScience"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/DataScience"
                        onClick={() => setMenuOpen(false)}
                      >
                        Data Science
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/RESTAPITesting"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/RESTAPITesting"
                        onClick={() => setMenuOpen(false)}
                      >
                        REST API Testing
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname ===
                        "/softwaresol/NetFullstackDevelopment"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/NetFullstackDevelopment"
                        onClick={() => setMenuOpen(false)}
                      >
                        .Net Full Stack Development
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/ReactJsDevelopment"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/ReactJsDevelopment"
                        onClick={() => setMenuOpen(false)}
                      >
                        React Js Development
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/RPA" ? "active" : ""
                      }
                    >
                      <Link
                        to="/softwaresol/RPA"
                        onClick={() => setMenuOpen(false)}
                      >
                        RPA (Robotic Process Automation)
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/softwaresol/Hardware&Networking"
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        to="/softwaresol/Hardware&Networking"
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
                className="dropdown-sol"
                onMouseEnter={() => setRegisterDropdown(true)}
                onMouseLeave={() => setRegisterDropdown(false)}
              >
                <span className="dropdown-toggle-sol">
                  Register <FaCaretDown />
                </span>
                {registerDropdown && (
                  <ul className="dropdown-menu-sol">
                    <li>
                      <span onClick={showModal} className="register-link">
                        Drp Software <br /> Solutions and Pvt Ltd
                      </span>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={
                  location.pathname === "/drpsoftwarecontact" ? "active" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/drpsoftwarecontact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal for Register */}
      <Modal
        title="Register for DRP Software Solutions Pvt Ltd"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "DRP Software Solutions Pvt Ltd" }}
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
              <Option value=" DRP Software Solutions Pvt Ltd">
                DRP Software Solutions Pvt Ltd
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

export default DrpSoftwareNavbar;
