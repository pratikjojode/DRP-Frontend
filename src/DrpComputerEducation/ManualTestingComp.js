import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Button, Form, Input, message, Modal, Select } from "antd";
import courseImage from "../images/manual-testing.webp";

const ManualTestingComp = () => {
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
  return (
    <>
      <DrpCompHeader />
      <DrpCompNavbar />
      <div className="manual-testing-container">
        <img
          src={courseImage}
          alt="Manual Testing Course"
          className="manual-testing-image"
        />
        <div className="manual-testing-content">
          <h1 className="course-title">Manual Testing Course</h1>
          <h2 className="course-subtitle">
            Learn Manual Testing & Become a Software Testing Expert
          </h2>
          <p className="course-description">
            Are you looking to start a career in software testing? Our Manual
            Testing Course is designed to help beginners and professionals
            master the fundamentals of manual testing. Learn how to test web
            applications, find bugs, and ensure software quality without writing
            code!
          </p>
          <ul className="course-highlights">
            <li>No prior experience required</li>
            <li>Hands-on projects & real-world scenarios</li>
            <li>Learn industry-standard testing tools</li>
          </ul>

          <h3 className="course-section-title">
            Why Choose Our Manual Testing Course?
          </h3>
          <ul className="course-benefits">
            <li>
              <strong>Comprehensive Curriculum</strong> – Covers everything from
              basics to advanced testing concepts
            </li>
            <li>
              <strong>Hands-on Training</strong> – Learn through practical
              examples and real-world projects
            </li>
            <li>
              <strong>Experienced Trainers</strong> – Get trained by industry
              experts with years of experience
            </li>
            <li>
              <strong>Flexible Learning</strong> – Learn at your own pace with
              online or instructor-led classes
            </li>
            <li>
              <strong>Certification & Job Assistance</strong> – Get certified
              and prepare for job interviews
            </li>
          </ul>

          <h3 className="course-section-title">Who Can Join This Course?</h3>
          <ul className="course-audience">
            <li>Freshers & Students interested in software testing</li>
            <li>IT Professionals looking to switch careers</li>
            <li>
              Business Analysts & Project Managers wanting to understand testing
            </li>
            <li>Developers who want to improve software quality</li>
          </ul>

          <h3 className="course-section-title">Course Curriculum</h3>
          <div className="course-modules">
            <h4 className="module-title">
              Module 1: Introduction to Software Testing
            </h4>
            <ul className="module-list">
              <li>What is Software Testing?</li>
              <li>Importance of Testing in Software Development</li>
              <li>Types of Testing (Manual vs. Automation)</li>
              <li>Software Development Life Cycle (SDLC)</li>
              <li>Software Testing Life Cycle (STLC)</li>
            </ul>
            <h4 className="module-title">
              Module 2: Testing Methodologies & Techniques
            </h4>
            <ul className="module-list">
              <li>Black Box Testing</li>
              <li>White Box Testing</li>
              <li>Gray Box Testing</li>
              <li>Static vs. Dynamic Testing</li>
              <li>Functional vs. Non-Functional Testing</li>
            </ul>
            <h4 className="module-title">
              Module 3: Web Application Testing Basics
            </h4>
            <ul className="module-list">
              <li>Understanding Web Architecture (Client-Server Model)</li>
              <li>Web Technologies (HTML, CSS, JavaScript Basics)</li>
              <li>Cookies, Sessions, and Local Storage</li>
              <li>Web Browser Testing</li>
            </ul>
            {/* Add more modules as needed */}
          </div>

          <h3 className="course-section-title">Course Features</h3>
          <ul className="course-features">
            <li>
              <strong>Course Duration:</strong> 4-6 Weeks
            </li>
            <li>
              <strong>Mode:</strong> Online/Offline
            </li>
            <li>
              <strong>Certificate of Completion:</strong> Yes
            </li>
            <li>
              <strong>Job Assistance:</strong> Resume Building & Interview
              Preparation
            </li>
          </ul>

          <div className="enroll-section">
            <h2 className="enroll-title">
              Enroll Now & Start Your Testing Journey!
            </h2>
            <p className="enroll-info">📅 Next Batch Starting Soon</p>
            <p className="enroll-info">🎯 100% Practical Training</p>
            <p className="enroll-info">🚀 Limited Seats Available</p>
            <button className="enroll-button" onClick={showModal}>
              Register Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        title="Apply for manaul Testing"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Manaul-Testing" }}
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
              <Option value="Manaul-Testing">ManualTesting</Option>
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

export default ManualTestingComp;
