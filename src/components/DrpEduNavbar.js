import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Form, Input, Button, Spin, message } from "antd";
import styles from "../styles/DrpEduNavbar.module.css";
import logo from "../images/DRP_banner3.png";
import axios from "axios";

const DrpEduNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(
    "DRP India & Abroad Education and Recruitment Services"
  );
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu) => {
    // For mobile: toggle the dropdown
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const showRegisterModal = (service) => {
    setSelectedService(
      service || "SAARDRP India & Abroad Education and Recruitment Services"
    );
    setModalVisible(true);
    // Close mobile menu after selection
    setMenuOpen(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    form.resetFields();
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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Logo" className="logo-main-ok" width="250px" />
          </Link>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation Links */}
          <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                Welcome!
              </Link>
            </li>
            <li>
              <Link
                to="/drpIndia&AbroadEducation"
                className={
                  location.pathname === "/drpIndia&AbroadEducation"
                    ? styles.active
                    : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className={styles.dropdown}>
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <span className={styles.arrowIcon}>▼</span>
              </div>
              <ul
                className={`${styles.dropdownMenu} ${
                  dropdownOpen === "services" ? styles.show : ""
                }`}
              >
                <li>
                  <Link to="/service1" onClick={() => setMenuOpen(false)}>
                    Abroad Education
                  </Link>
                </li>
                <li>
                  <Link to="/service9" onClick={() => setMenuOpen(false)}>
                    Air Ticket Booking
                  </Link>
                </li>
                <li>
                  <Link to="/service7" onClick={() => setMenuOpen(false)}>
                    Travel and Tourism
                  </Link>
                </li>
                <li>
                  <Link to="/service6" onClick={() => setMenuOpen(false)}>
                    Passport & Visa
                  </Link>
                </li>
                <li>
                  <Link to="/service8" onClick={() => setMenuOpen(false)}>
                    Immigration
                  </Link>
                </li>
                <li>
                  <Link to="/service5" onClick={() => setMenuOpen(false)}>
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link to="/service2" onClick={() => setMenuOpen(false)}>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/service3" onClick={() => setMenuOpen(false)}>
                    SIM Cards
                  </Link>
                </li>
                <li>
                  <Link to="/service4" onClick={() => setMenuOpen(false)}>
                    Forex
                  </Link>
                </li>
                <li>
                  <Link to="/service10" onClick={() => setMenuOpen(false)}>
                    Dummy Ticket
                  </Link>
                </li>
              </ul>
            </li>

            {/* Countries Dropdown */}
            <li className={styles.dropdown}>
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("countries")}
              >
                <span>Countries</span>
                <span className={styles.arrowIcon}>▼</span>
              </div>
              <ul
                className={`${styles.dropdownMenu} ${
                  dropdownOpen === "countries" ? styles.show : ""
                }`}
              >
                <li>
                  <Link
                    to="/services/education/india"
                    onClick={() => setMenuOpen(false)}
                  >
                    India
                  </Link>
                </li>
                <li>
                  <Link to="/usa" onClick={() => setMenuOpen(false)}>
                    USA
                  </Link>
                </li>
                <li>
                  <Link to="/uk" onClick={() => setMenuOpen(false)}>
                    UK
                  </Link>
                </li>
                <li>
                  <Link to="/canada" onClick={() => setMenuOpen(false)}>
                    Canada
                  </Link>
                </li>
                <li>
                  <Link to="/australia" onClick={() => setMenuOpen(false)}>
                    Australia
                  </Link>
                </li>
                <li>
                  <Link to="/germany" onClick={() => setMenuOpen(false)}>
                    Germany
                  </Link>
                </li>
                <li>
                  <Link to="/europe" onClick={() => setMenuOpen(false)}>
                    Europe
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/drpCoaching"
                className={
                  location.pathname === "/drpCoaching" ? styles.active : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Coaching
              </Link>
            </li>

            {/* Register Dropdown */}
            <li className={styles.dropdown}>
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("register")}
              >
                <span>Register Now</span>
                <span className={styles.arrowIcon}>▼</span>
              </div>
              <ul
                className={`${styles.dropdownMenu} ${
                  dropdownOpen === "register" ? styles.show : ""
                }`}
              >
                <li
                  className={styles.drpppp}
                  onClick={() => {
                    showRegisterModal(
                      "SAARDRP India & Abroad Education and Recruitment Services"
                    );
                    setMenuOpen(false);
                  }}
                >
                  SAARDRP India & Abroad Education and Recruitment Services
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/drpEduBlogs"
                className={
                  location.pathname === "/drpEduBlogs" ? styles.active : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact" ? styles.active : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className={
                  location.pathname === "/feedback" ? styles.active : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Ant Design Modal with Form */}
      <Modal
        title={`Register for ${selectedService}`}
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
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
    </>
  );
};

export default DrpEduNavbar;
