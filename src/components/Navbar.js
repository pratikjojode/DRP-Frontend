import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Modal, Form, Input, Button, message, Spin } from "antd";
import axios from "axios";
import loginimage from "../images/DRP_group1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = (serviceName) => {
    console.log("Selected service:", serviceName); // Log to check value
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
      form.resetFields(); // ✅ Reset form after submission
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
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle">About ▼</span>
            <ul className="dropdown-menu-home">
              <li>
                <NavLink to="/about/vision">Company </NavLink>
              </li>
              <li>
                <NavLink to="/about/mission">Vision & Mission</NavLink>
              </li>
              <li>
                <NavLink to="/about/core-values">Core Values</NavLink>
              </li>
              <li>
                <NavLink to="/about/our-skills">Our Skills</NavLink>
              </li>
              <li>
                <NavLink to="/about/leadership-team">Leadership Team</NavLink>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <span className="dropdown-toggle">Services ▼</span>
            <ul className="dropdown-menu-home">
              <li className="sub-dropdown">
                <NavLink to="">Education ⏵</NavLink>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink to="/services/education/indiaHome">India</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/education/abroad">Abroad</NavLink>
                  </li>
                </ul>
              </li>
              <li className="sub-dropdown">
                <NavLink to="">IT Services ⏵</NavLink>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink to="/services/it-services/web-development">
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/it-services/app-development">
                      App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/it-services/cloud-services">
                      Cloud Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/it-services/hardware-networking">
                      Hardware & N/W Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="sub-dropdown">
                <NavLink to="">Training ⏵</NavLink>
                <ul className="sub-dropdown-menu-home">
                  <li>
                    <NavLink to="/services/training/mscit">MSCIT</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/training/computer-programming">
                      Computer Programming
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/training/graphic-designing">
                      Graphic Designing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/training/hardware-courses">
                      Hardware Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/training/marketing-video-editing">
                      Marketing & Video Editing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/training/autodesk-cad">
                      AutoDesk CAD
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setRegisterDropdownOpen(true)}
            onMouseLeave={() => setRegisterDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Register Now ▼</span>
            <ul
              className={`dropdown-menu-home ${
                registerDropdownOpen ? "show" : ""
              }`}
            >
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() =>
                    showModal(
                      "DRP India & Abroad Education and Recruitment Services"
                    )
                  }
                >
                  DRP India & Abroad Education and Recruitment Services
                </button>
              </li>
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() => showModal("DRP Software Solutions Pvt Ltd")}
                >
                  DRP Software Solutions Pvt Ltd
                </button>
              </li>
              <li>
                <button
                  className="dropdown-btn"
                  onClick={() =>
                    showModal("DRP Computer Education and Training Institute")
                  }
                >
                  DRP Computer Education and Training Institute
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

      {/* Inquiry Modal */}
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
