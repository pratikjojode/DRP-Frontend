import React from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import rpaImage from "../images/robo.webp";
import { useState } from "react";
import { Modal, Form, Input, Button, Select, message } from "antd";
import axios from "axios";
const RpaComp = () => {
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
      <div className="rpa-course-container">
        <img src={rpaImage} alt="RPA Course" className="rpa-course-image" />
        <h1 className="rpa-course-title">
          RPA (Robotic Process Automation) Training Course
        </h1>
        <h2 className="rpa-course-subtitle">
          Master RPA & Automate Business Processes
        </h2>
        <p className="rpa-course-description">
          Looking to automate repetitive tasks and improve business efficiency?
          Our RPA (Robotic Process Automation) Training Course is designed to
          help beginners and professionals master leading RPA tools like UiPath,
          Automation Anywhere, and Blue Prism. Learn how to create bots,
          automate workflows, and implement RPA solutions in real-world business
          environments.
        </p>
        <ul className="rpa-course-benefits">
          <li>✅ No prior programming experience required</li>
          <li>✅ Hands-on training with real-world automation projects</li>
          <li>✅ Learn UiPath, Automation Anywhere, and Blue Prism</li>
          <li>✅ Certification guidance & job assistance</li>
        </ul>

        <div className="rpa-course-features">
          <h3>Why Choose Our RPA Training Course?</h3>
          <ul>
            <li>
              🔹 Comprehensive Curriculum – Covers RPA fundamentals, bot
              development, and advanced automation
            </li>
            <li>
              🔹 Hands-on Training – Work on live projects and real-world case
              studies
            </li>
            <li>🔹 Expert Mentors – Learn from industry professionals</li>
            <li>
              🔹 Flexible Learning – Online, offline, and self-paced options
            </li>
            <li>
              🔹 Certification & Job Assistance – Get certified and prepare for
              job interviews
            </li>
          </ul>
        </div>

        <div className="rpa-course-who">
          <h3>Who Can Join This Course?</h3>
          <ul>
            <li>
              👨‍💻 IT Professionals & Developers looking to specialize in
              automation
            </li>
            <li>
              🔄 Business Analysts & Managers wanting to implement RPA solutions
            </li>
            <li>
              🛠️ Freshers & Non-IT Professionals interested in automation
              careers
            </li>
            <li>
              📈 Entrepreneurs & Freelancers wanting to automate business
              processes
            </li>
          </ul>
        </div>

        <div className="rpa-course-curriculum">
          <h3>RPA Training Course Curriculum</h3>
          <h4>Module 1: Introduction to Robotic Process Automation (RPA)</h4>
          <ul>
            <li>What is RPA?</li>
            <li>How RPA Works & Its Business Impact</li>
            <li>Benefits & Use Cases of RPA in Industries</li>
            <li>
              Introduction to Leading RPA Tools (UiPath, Automation Anywhere,
              Blue Prism)
            </li>
          </ul>

          <h4>Module 2: UiPath Fundamentals</h4>
          <ul>
            <li>Introduction to UiPath Studio</li>
            <li>UiPath Activities & Workflow Automation</li>
            <li>Data Scraping & Web Automation</li>
            <li>Error Handling & Debugging in UiPath</li>
            <li>Building & Deploying Bots with UiPath Orchestrator</li>
          </ul>

          <h4>Module 3: Automation Anywhere Essentials</h4>
          <ul>
            <li>Introduction to Automation Anywhere Control Room</li>
            <li>Creating & Managing Bots in Automation Anywhere</li>
            <li>Web, Excel & Email Automation</li>
            <li>Error Handling & Exception Management</li>
            <li>Deploying Bots in Enterprise Environments</li>
          </ul>

          <h4>Module 4: Blue Prism Basics</h4>
          <ul>
            <li>Understanding Blue Prism Architecture</li>
            <li>Creating & Configuring Processes</li>
            <li>Implementing Business Logic with Blue Prism</li>
            <li>Handling Exceptions & Debugging Bots</li>
            <li>Integrating Blue Prism with Other Applications</li>
          </ul>
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
      <Footer />

      <Modal
        title="Apply for RPA (Robotic Process Automation) "
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "RPA (Robotic Process Automation) " }}
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
              <Option value="RPA (Robotic Process Automation) ">
                RPA (Robotic Process Automation){" "}
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

export default RpaComp;
