import React, { useState } from "react";
import DrpCompHeader from "../../DrpComputerEducation/DrpCompHeader";
import DrpCompNavbar from "../../DrpComputerEducation/DrpCompNavbar";
import Footer from "../../components/Footer";
import javaImage from "../../images/java.webp"; // Importing the image
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
const JavaFullStackDevelopmentComp = () => {
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
      <div className="java-container">
        <img
          src={javaImage}
          alt="Java Full Stack Development"
          className="java-image"
        />

        <h1 className="java-title">Java Full Stack Development Course</h1>
        <p className="java-subtitle">
          Become a Skilled Full Stack Developer with Java
        </p>
        <p className="java-description">
          Want to build dynamic web applications from scratch? Our Java Full
          Stack Development Course is designed to help beginners and
          professionals master front-end, back-end, and database technologies
          using Java. Learn industry-relevant skills and work on real-world
          projects to become a job-ready full-stack developer.
        </p>

        <div className="java-benefits">
          <h2>Why Choose Our Java Full Stack Development Course?</h2>
          <ul>
            <li>
              ✅ Comprehensive Curriculum – Covers Java, Spring Boot,
              React/Angular, MySQL, and more
            </li>
            <li>
              ✅ Hands-on Training – Work on live projects and case studies
            </li>
            <li>✅ Expert Mentors – Learn from industry professionals</li>
            <li>
              ✅ Flexible Learning – Online, offline, and self-paced options
            </li>
            <li>
              ✅ Certification & Job Assistance – Get certified and prepare for
              job interviews
            </li>
          </ul>
        </div>

        <div className="java-modules">
          <h2>Course Curriculum</h2>
          <div className="module">
            <h3>Module 1: Introduction to Full Stack Development</h3>
            <ul>
              <li>What is Full Stack Development?</li>
              <li>Understanding Front-End, Back-End, and Database</li>
              <li>Overview of Java Full Stack Technologies</li>
              <li>Setting Up Development Environment</li>
            </ul>
          </div>

          <div className="module">
            <h3>Module 2: Core Java Programming</h3>
            <ul>
              <li>Java Basics (Data Types, Variables, Operators)</li>
              <li>Object-Oriented Programming (OOP) in Java</li>
              <li>Exception Handling in Java</li>
              <li>Collections Framework</li>
              <li>Multithreading & Concurrency</li>
              <li>File Handling & I/O Streams</li>
            </ul>
          </div>

          {/* Add more modules if needed */}
        </div>

        <div className="enroll-section">
          <h2 className="enroll-title">
            Enroll Now & Start Your Java Full Stack Development!
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
        title="Apply for Java Full Stack Development"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Java Full Stack Development" }}
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
              <Option value="Java Full Stack Development">
                Java Full Stack Development
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

export default JavaFullStackDevelopmentComp;
