import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Modal, Form, Input, Button, message, Spin } from "antd";
import axios from "axios";
import loginimage from "../images/DRP_new1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [form] = Form.useForm();

  // Function to toggle specific dropdown by ID
  const toggleDropdown = (dropdownId) => {
    if (window.innerWidth <= 768) {
      setActiveDropdowns((prevState) =>
        prevState.includes(dropdownId)
          ? prevState.filter((id) => id !== dropdownId)
          : [...prevState, dropdownId]
      );
    }
  };

  // Check if dropdown is active
  const isDropdownActive = (dropdownId) => {
    return activeDropdowns.includes(dropdownId);
  };

  const showModal = (serviceName) => {
    console.log("Selected service:", serviceName);
    setSelectedService(serviceName);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/contact-form-drp-register",
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      message.success(
        response.data.message || "Successfully submitted the form!"
      );

      setModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Error submitting the form:", error);
      message.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // Close mobile menu when clicking outside
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (modalVisible) {
      form.resetFields();
      form.setFieldsValue({ serviceName: selectedService });
    }
  }, [modalVisible, selectedService, form]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={loginimage} alt="DRP Logo" className="logo-main" />
          </Link>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button className="mobile-close" onClick={closeMobileMenu}>
            ✕
          </button>

          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>

          <li className={`dropdown ${isDropdownActive("about") ? "show" : ""}`}>
            <span
              className="dropdown-toggle"
              onClick={() => toggleDropdown("about")}
            >
              About▼ {isDropdownActive("about")}
            </span>
            <ul className="dropdown-menu-home">
              <li>
                <NavLink to="/about/vision" onClick={closeMobileMenu}>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/mission" onClick={closeMobileMenu}>
                  Vision & Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/core-values" onClick={closeMobileMenu}>
                  Core Values
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/our-skills" onClick={closeMobileMenu}>
                  Our Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/leadership-team" onClick={closeMobileMenu}>
                  Leadership Team
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li
            className={`dropdown ${isDropdownActive("services") ? "show" : ""}`}
          >
            <span
              className="dropdown-toggle"
              onClick={() => toggleDropdown("services")}
            >
              Services▼ {isDropdownActive("services")}
            </span>
            <ul className="dropdown-menu-home">
              <li
                className={`sub-dropdown ${
                  isDropdownActive("education") ? "show" : ""
                }`}
              >
                <span
                  className="sub-dropdown-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("education");
                  }}
                >
                  Education {isDropdownActive("education") ? "▼" : "▶"}
                </span>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink
                      to="/services/education/indiaHome"
                      onClick={closeMobileMenu}
                    >
                      India
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/education/abroad"
                      onClick={closeMobileMenu}
                    >
                      Abroad
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li
                className={`sub-dropdown ${
                  isDropdownActive("it-services") ? "show" : ""
                }`}
              >
                <span
                  className="sub-dropdown-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("it-services");
                  }}
                >
                  IT Services {isDropdownActive("it-services") ? "▼" : "▶"}
                </span>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink
                      to="/services/it-services/web-development"
                      onClick={closeMobileMenu}
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/it-services/app-development"
                      onClick={closeMobileMenu}
                    >
                      App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/it-services/cloud-services"
                      onClick={closeMobileMenu}
                    >
                      Cloud Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/it-services/hardware-networking"
                      onClick={closeMobileMenu}
                    >
                      Hardware & N/W Services
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li
                className={`sub-dropdown ${
                  isDropdownActive("training") ? "show" : ""
                }`}
              >
                <span
                  className="sub-dropdown-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("training");
                  }}
                >
                  Training {isDropdownActive("training") ? "▼" : "▶"}
                </span>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink
                      to="/services/training/mscit"
                      onClick={closeMobileMenu}
                    >
                      MSCIT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/training/computer-programming"
                      onClick={closeMobileMenu}
                    >
                      Computer Programming
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/training/graphic-designing"
                      onClick={closeMobileMenu}
                    >
                      Graphic Designing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/training/hardware-courses"
                      onClick={closeMobileMenu}
                    >
                      Hardware Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/training/marketing-video-editing"
                      onClick={closeMobileMenu}
                    >
                      Marketing & Video Editing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/training/autodesk-cad"
                      onClick={closeMobileMenu}
                    >
                      AutoDesk CAD
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li
            className={`dropdown ${isDropdownActive("register") ? "show" : ""}`}
            onMouseEnter={() =>
              window.innerWidth > 768 && setRegisterDropdownOpen(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setRegisterDropdownOpen(false)
            }
          >
            <span
              className="dropdown-toggle"
              onClick={() => toggleDropdown("register")}
            >
              Register Now▼ {isDropdownActive("register")}
            </span>
            <ul
              className={`dropdown-menu-home ${
                registerDropdownOpen || isDropdownActive("register")
                  ? "show"
                  : ""
              }`}
            >
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() => {
                    showModal(
                      "SAARDRP India & Abroad Education and Recruitment Services"
                    );
                    closeMobileMenu();
                  }}
                >
                  SAARDRP India & Abroad Education and Recruitment Services
                </button>
              </li>
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() => {
                    showModal("SAARDRP Software Solutions");
                    closeMobileMenu();
                  }}
                >
                  SAARDRP Software Solutions Pvt Ltd
                </button>
              </li>
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() => {
                    showModal(
                      "SAARDRP Computer Education and Training Institute"
                    );
                    closeMobileMenu();
                  }}
                >
                  <span className="saar-text">SAAR</span>DRP Computer Education
                  and Training Institute
                </button>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contactHome" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Our Blogs
            </NavLink>
          </li>
        </ul>
      </div>

      <Modal
        title={`Register for ${selectedService}`}
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className="inquiry-modal-new"
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{ serviceName: selectedService }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="contact"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item
            label="Select Service"
            name="serviceName"
            initialValue={selectedService}
          >
            <Input placeholder="Enter service name" disabled />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block disabled={loading}>
              {loading ? <Spin /> : "Submit Inquiry"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </nav>
  );
};

export default Navbar;
