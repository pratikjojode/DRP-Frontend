import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import courseImage from "../images/rest.png";

const RESTAPITestingComp = () => {
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
      <div className="rest-api-course-container">
        <div className="course-header">
          <img
            src={courseImage}
            alt="REST API Testing Course"
            className="course-image"
          />
          <h1 className="course-title">Master REST API Testing & Automation</h1>
        </div>

        <div className="rest-api-course-content">
          <p className="course-description">
            Want to become an expert in API Testing? Our REST API Testing Course
            is designed to help beginners and professionals master API testing
            using Postman, REST Assured (Java), and Python Requests. Learn how
            to automate API testing, validate responses, and ensure secure and
            scalable web services.
          </p>

          <h2 className="why-choose-title">
            Why Choose Our REST API Testing Course?
          </h2>
          <ul className="course-benefits-list">
            <li>
              Comprehensive Curriculum – Covers API concepts, automation,
              security & performance testing
            </li>
            <li>
              Hands-on Training – Work on live projects and real-world case
              studies
            </li>
            <li>Expert Mentors – Learn from industry professionals</li>
            <li>Flexible Learning – Online, offline, and self-paced options</li>
            <li>
              Certification & Job Assistance – Get certified and prepare for job
              interviews
            </li>
          </ul>

          <h2 className="course-curriculum-title">Course Curriculum</h2>
          <div className="modules-container">
            <div className="module">
              <h3 className="module-title">
                Module 1: Introduction to REST APIs
              </h3>
              <ul className="module-list">
                <li>What is an API?</li>
                <li>REST vs. SOAP APIs</li>
                <li>Understanding HTTP Methods (GET, POST, PUT, DELETE)</li>
                <li>API Headers, Authentication & Status Codes</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 2: API Testing with Postman
              </h3>
              <ul className="module-list">
                <li>Introduction to Postman</li>
                <li>Creating & Executing API Requests</li>
                <li>Query Parameters & Headers in Postman</li>
                <li>Writing Tests & Assertions in Postman</li>
                <li>Automating API Collections & Running Test Suites</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 3: REST API Testing with Python (Requests Library)
              </h3>
              <ul className="module-list">
                <li>Introduction to API Automation with Python</li>
                <li>Installing and Using the Requests Library</li>
                <li>Handling JSON & XML Responses</li>
                <li>Writing Assertions for API Responses</li>
                <li>Automating API Tests using Python Scripts</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 4: REST API Testing with REST Assured (Java)
              </h3>
              <ul className="module-list">
                <li>Introduction to REST Assured & Java Setup</li>
                <li>Writing API Test Cases in Java</li>
                <li>Validating API Responses using REST Assured</li>
                <li>Handling Authentication & Token-Based APIs</li>
                <li>Data-Driven Testing in REST Assured</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 5: API Authentication & Security Testing
              </h3>
              <ul className="module-list">
                <li>Authentication Types (Basic Auth, OAuth, JWT)</li>
                <li>Testing API Security & Handling API Tokens</li>
                <li>OWASP Top 10 Security Risks for APIs</li>
                <li>
                  Validating Input & Preventing Attacks (SQL Injection, XSS)
                </li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 6: API Performance Testing with JMeter
              </h3>
              <ul className="module-list">
                <li>Introduction to API Load Testing</li>
                <li>Setting Up JMeter for API Testing</li>
                <li>Configuring Thread Groups & Load Scenarios</li>
                <li>Analyzing Performance Test Results</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 7: CI/CD Integration for API Testing
              </h3>
              <ul className="module-list">
                <li>Introduction to CI/CD in API Testing</li>
                <li>Setting Up Jenkins for API Automation</li>
                <li>Running Automated API Tests in CI/CD Pipeline</li>
                <li>Generating API Test Reports</li>
              </ul>
            </div>
            <div className="module">
              <h3 className="module-title">
                Module 8: API Testing Best Practices & Live Project
              </h3>
              <ul className="module-list">
                <li>Writing Efficient & Scalable API Tests</li>
                <li>Debugging & Troubleshooting API Failures</li>
                <li>Live Project: End-to-End API Automation</li>
                <li>Resume Building & Interview Preparation</li>
                <li>Mock Interviews & Job Assistance</li>
              </ul>
            </div>
          </div>

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
        title="Apply for REST API"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "REST API" }}
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
              <Option value="REST API">REST API</Option>
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

export default RESTAPITestingComp;
