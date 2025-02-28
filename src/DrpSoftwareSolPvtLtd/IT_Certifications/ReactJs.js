import React, { useState } from "react";
import DrpSolHeader from "../../components/DrpSolHeader";
import DrpSoftwareNavbar from "../../components/DrpSoftwareNavbar";
import Footer from "../../components/Footer";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import courseImage from "../../images/react.webp";
import styles from "../../styles/ReactJs.css";
const ReactJs = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalVisible(true);
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
      <DrpSolHeader />
      <DrpSoftwareNavbar />
      <div className="react-course-container">
        <img
          src={courseImage}
          alt="React Course"
          className="react-course-image"
        />
        <h1 className="react-course-title">React.js Development Course</h1>
        <h2 className="react-course-subtitle">
          Master React.js & Build Dynamic Web Applications
        </h2>
        <p className="react-course-description">
          Looking to become a front-end developer? Our React.js Development
          Course is designed to help beginners and professionals master
          React.js, Redux, Hooks, Context API, and modern front-end development
          techniques.
        </p>

        <h2>Course Modules</h2>
        <ul className="react-course-modules">
          <li>
            <strong>Module 1:</strong> Introduction to React.js - JSX, Virtual
            DOM, Environment Setup
          </li>
          <li>
            <strong>Module 2:</strong> Components & Props - Functional/Class
            Components, Lifecycle Methods
          </li>
          <li>
            <strong>Module 3:</strong> State Management & Hooks - useState,
            useEffect, Event Handling
          </li>
          <li>
            <strong>Module 4:</strong> React Router & Navigation - Dynamic &
            Nested Routes
          </li>
          <li>
            <strong>Module 5:</strong> API Integration - Fetch, Axios,
            Async/Await
          </li>
          <li>
            <strong>Module 6:</strong> State Management with Redux & Context API
          </li>
          <li>
            <strong>Module 7:</strong> Advanced React Concepts - Custom Hooks,
            Performance Optimization
          </li>
          <li>
            <strong>Module 8:</strong> Styling in React - CSS Modules, Tailwind,
            Material-UI
          </li>
          <li>
            <strong>Module 9:</strong> Testing & Debugging - Jest, React Testing
            Library
          </li>
          <li>
            <strong>Module 10:</strong> Deployment - Netlify, Vercel, AWS,
            GitHub Actions
          </li>
          <li>
            <strong>Module 11:</strong> Capstone Project & Job Preparation
          </li>
        </ul>

        <h2>Course Features</h2>
        <ul className="react-course-features">
          <li>📚 Duration: 8-10 Weeks</li>
          <li>🎥 Mode: Online/Offline</li>
          <li>📜 Certificate of Completion</li>
          <li>💼 Job Assistance & Interview Preparation</li>
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

      <Footer />

      <Modal
        title="Apply for ReactJs"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "ReactJs" }}
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
              <Option value="ReactJs">ReactJs</Option>
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

export default ReactJs;
