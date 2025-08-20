import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Form, Input, Button, Spin, message } from "antd";
import styles from "../styles/DrpEduNavbar.module.css";
import logo from "../images/DRP_bann_new_ab.png";
import axios from "axios";

const DrpEduNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
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

  const toggleDropdown = (menuId) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  const showRegisterModal = (service) => {
    setSelectedService(
      service || "SAARDRP India & Abroad Education and Recruitment Services"
    );
    setModalVisible(true);
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

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setDropdownOpen({});
  };

  const handleMouseEnter = (menuId) => {
    if (window.innerWidth > 768) {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [menuId]: true,
      }));
    }
  };

  const handleMouseLeave = (menuId) => {
    if (window.innerWidth > 768) {
      setDropdownOpen((prevState) => ({
        ...prevState,
        [menuId]: false,
      }));
    }
  };

  useEffect(() => {
    if (modalVisible) {
      form.resetFields();
      form.setFieldsValue({ serviceName: selectedService });
    }
  }, [modalVisible, selectedService, form]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logo}>
            <img
              src={logo}
              alt="Logo"
              className={styles.logoMainOk}
              width="250px"
            />
          </Link>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? styles.active : ""}
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li
              className={`${styles.dropdown} ${
                dropdownOpen["services"] ? styles.show : ""
              }`}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <span className={styles.arrowIcon}>▼</span>
              </div>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/service1" onClick={closeMobileMenu}>
                    Abroad Education
                  </Link>
                </li>
                <li>
                  <Link to="/service11" onClick={closeMobileMenu}>
                    Attestation and Apostille (MEA)
                  </Link>
                </li>
                <li>
                  <Link to="/service9" onClick={closeMobileMenu}>
                    Air Ticket Booking
                  </Link>
                </li>
                <li>
                  <Link to="/service7" onClick={closeMobileMenu}>
                    Travel and Tourism
                  </Link>
                </li>
                <li>
                  <Link to="/service6" onClick={closeMobileMenu}>
                    Passport & Visa
                  </Link>
                </li>
                <li>
                  <Link to="/service8" onClick={closeMobileMenu}>
                    Immigration
                  </Link>
                </li>
                <li>
                  <Link to="/service5" onClick={closeMobileMenu}>
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link to="/service2" onClick={closeMobileMenu}>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/service3" onClick={closeMobileMenu}>
                    SIM Cards
                  </Link>
                </li>
                <li>
                  <Link to="/service4" onClick={closeMobileMenu}>
                    Forex
                  </Link>
                </li>
                <li>
                  <Link to="/service10" onClick={closeMobileMenu}>
                    Dummy Ticket
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`${styles.dropdown} ${
                dropdownOpen["education"] ? styles.show : ""
              }`}
              onMouseEnter={() => handleMouseEnter("education")}
              onMouseLeave={() => handleMouseLeave("education")}
            >
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("education")}
              >
                <span>Education ▼</span>
              </div>
              <ul className={styles.dropdownMenu}>
                <li
                  className={`${styles.subDropdown} ${
                    dropdownOpen["medical"] ? styles.show : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("medical")}
                  onMouseLeave={() => handleMouseLeave("medical")}
                >
                  <div
                    className={styles.subDropdownToggle}
                    onClick={() => toggleDropdown("medical")}
                  >
                    <span>Medical ▼</span>
                  </div>
                  <ul className={styles.subDropdownMenu}>
                    <li
                      className={`${styles.subSubDropdown} ${
                        dropdownOpen["medicalDegrees"] ? styles.show : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter("medicalDegrees")}
                      onMouseLeave={() => handleMouseLeave("medicalDegrees")}
                    >
                      <div
                        className={styles.subSubDropdownToggle}
                        onClick={() => toggleDropdown("medicalDegrees")}
                      >
                        <span>MBBS/MD/MS/BAMS ▼</span>
                      </div>
                      <ul className={styles.subSubDropdownMenu}>
                        <li>
                          <Link
                            to="/services/education/medical/degrees/india"
                            onClick={closeMobileMenu}
                          >
                            India
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/education/medical/degrees/usa"
                            onClick={closeMobileMenu}
                          >
                            USA
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/education/medical/degrees/uk"
                            onClick={closeMobileMenu}
                          >
                            UK
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/education/medical/degrees/canada"
                            onClick={closeMobileMenu}
                          >
                            Canada
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${styles.subDropdown} ${
                    dropdownOpen["non-medical"] ? styles.show : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter("non-medical")}
                  onMouseLeave={() => handleMouseLeave("non-medical")}
                >
                  <div
                    className={styles.subDropdownToggle}
                    onClick={() => toggleDropdown("non-medical")}
                  >
                    <span>Non-Medical ▼</span>
                  </div>
                  <ul className={styles.subDropdownMenu}>
                    <li>
                      <Link
                        to="/services/education/non-medical/ms"
                        onClick={closeMobileMenu}
                      >
                        MS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/education/non-medical/phd-post-doc"
                        onClick={closeMobileMenu}
                      >
                        PhD/Post Doc
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/education/non-medical/diploma-etc"
                        onClick={closeMobileMenu}
                      >
                        Dip/DE/GF/MEF
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/education/non-medical/pharmacy"
                        onClick={closeMobileMenu}
                      >
                        Pharmacy
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/drpCoaching"
                className={
                  location.pathname === "/drpCoaching" ? styles.active : ""
                }
                onClick={closeMobileMenu}
              >
                Coaching
              </Link>
            </li>

            <li
              className={`${styles.dropdown} ${
                dropdownOpen["register"] ? styles.show : ""
              }`}
              onMouseEnter={() => handleMouseEnter("register")}
              onMouseLeave={() => handleMouseLeave("register")}
            >
              <div
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("register")}
              >
                <span>Register Now</span>
                <span className={styles.arrowIcon}>▼</span>
              </div>
              <ul className={styles.dropdownMenu}>
                <li
                  className={styles.drpppp}
                  onClick={() => {
                    showRegisterModal(
                      "SAARDRP India & Abroad Education and Recruitment Services"
                    );
                    closeMobileMenu();
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </nav>

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
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
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
          <Form.Item label="Select Service" name="serviceName">
            <Input
              placeholder="Enter service name"
              disabled
              value={selectedService}
            />
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
