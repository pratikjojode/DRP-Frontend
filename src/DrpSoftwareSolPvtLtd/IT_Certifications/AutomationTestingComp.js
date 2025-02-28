import React, { useState } from "react";

import DrpCompHeader from "../../DrpComputerEducation/DrpCompHeader";
import DrpCompNavbar from "../../DrpComputerEducation/DrpCompNavbar";
import Footer from "../../components/Footer";
import automationImg from "../../images/automation.webp";
import axios from "axios";
import { Button, Input, message, Modal, Select } from "antd";
import { Form } from "antd";
const AutomationTestingComp = () => {
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

      <div className="automation-container">
        <div className="automation-content">
          <img
            src={automationImg}
            alt="Automation Testing"
            className="automation-top-image"
          />

          {/* Course Title */}
          <h1 className="automation-title">
            Automation Testing Course (Python / Java Selenium)
          </h1>
          <p className="automation-subtitle">
            Become a Certified Automation Tester with Selenium
          </p>
          <p className="automation-subtitle">
            Learn to automate web applications using industry-leading tools and
            frameworks.
          </p>

          {/* Course Highlights */}
          <div className="automation-section">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                Comprehensive curriculum covering Selenium, Python/Java, TestNG
              </li>
              <li>Hands-on training with real-world projects</li>
              <li>Expert instructors from the industry</li>
              <li>Flexible learning options (Online/Offline/Self-paced)</li>
              <li>Certification & Job Assistance</li>
            </ul>
          </div>

          {/* Who Can Join */}
          <div className="automation-section">
            <h2>Who Can Join?</h2>
            <ul>
              <li>
                Freshers & Students looking for a career in automation testing
              </li>
              <li>Manual Testers who want to switch to automation</li>
              <li>Developers who want to improve software testing skills</li>
              <li>IT Professionals looking for career growth</li>
            </ul>
          </div>

          {/* Course Features */}
          <div className="automation-section">
            <h2>Course Features</h2>
            <ul>
              <li>📚 Duration: 6-8 Weeks</li>
              <li>🎥 Mode: Online / Offline</li>
              <li>📜 Certificate of Completion</li>
              <li>
                💼 Job Assistance: Resume Building & Interview Preparation
              </li>
              <li>👩‍🏫 Live Doubt Clearing Sessions</li>
              <li>💻 Real-time project work</li>
              <li>📝 Mock Interviews & Quizzes</li>
            </ul>
          </div>

          {/* Syllabus */}
          <div className="automation-section">
            <h2>Course Syllabus</h2>
            <ul>
              <li>Introduction to Automation Testing</li>
              <li>Setting up Selenium WebDriver</li>
              <li>Java / Python for Selenium</li>
              <li>TestNG Framework</li>
              <li>Page Object Model (POM) Design Pattern</li>
              <li>Data-Driven Testing with Excel</li>
              <li>Handling Dynamic Web Elements</li>
              <li>Automating Web Forms and Alerts</li>
              <li>Continuous Integration (CI/CD) with Jenkins</li>
              <li>Performance & API Testing with JMeter & Postman</li>
              <li>Final Project & Certification</li>
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="automation-section">
            <h2>Career Opportunities</h2>
            <ul>
              <li>Automation Test Engineer</li>
              <li>QA Engineer</li>
              <li>Software Test Analyst</li>
              <li>Test Automation Architect</li>
              <li>Performance Test Engineer</li>
            </ul>
          </div>

          {/* Enroll Button */}
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
        title="Apply for Automation Testing"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Automation-Testing" }}
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
              <Option value="Automation-Testing">AutomationTesting</Option>
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

export default AutomationTestingComp;
