import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import { Modal, Form, Input, Button, Select, message } from "antd";
import axios from "axios";
import courseImage from "../images/net.webp";

const NetFullstackDevelopmentComp = () => {
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
      <div className="net-course-container">
        <div className="net-course-header">
          <img
            src={courseImage}
            alt=".NET Full Stack Course"
            className="net-course-image"
          />
          <h1>.NET Full Stack Development Course</h1>
          <p>Become a Skilled .NET Full Stack Developer</p>
        </div>
        <div className="net-course-content">
          <h2>
            Want to build powerful web applications using .NET technologies?
          </h2>
          <p>
            Our .NET Full Stack Development Course is designed to help beginners
            and professionals master front-end, back-end, and database
            development using C#, ASP.NET, Angular/React, and SQL Server. Gain
            hands-on experience with real-world projects and become job-ready.
          </p>
          <ul className="net-course-highlights">
            <li>No prior programming experience required</li>
            <li>
              Learn C#, ASP.NET Core, Web API, Angular/React, and SQL Server
            </li>
            <li>Hands-on training with real-world projects</li>
            <li>Certification guidance & job assistance</li>
          </ul>
          <h2>Why Choose Our .NET Full Stack Development Course?</h2>
          <ul className="net-course-benefits">
            <li>
              Comprehensive Curriculum – Covers C#, .NET Core, ASP.NET, Web
              APIs, Angular/React & SQL Server
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
          <h2>Who Can Join This Course?</h2>
          <ul className="net-who-can-join">
            <li>
              Students & Freshers aspiring to become full-stack developers
            </li>
            <li>IT Professionals looking to upskill or switch careers</li>
            <li>Software Engineers who want to master .NET technologies</li>
            <li>
              Entrepreneurs & Freelancers wanting to build web applications
            </li>
          </ul>
          <h2>Course Curriculum</h2>
          <div className="net-course-modules">
            <h3>Module 1: Introduction to Full Stack Development</h3>
            <p>• What is Full Stack Development?</p>
            <p>• Understanding Front-End, Back-End, and Databases</p>
            <p>• Overview of .NET Full Stack Technologies</p>
            <p>• Setting Up the Development Environment</p>
            <h3>Module 2: C# Programming Fundamentals</h3>
            <p>• Introduction to C# & .NET Framework</p>
            <p>• Variables, Data Types & Operators</p>
            <p>• Object-Oriented Programming (OOP) in C#</p>
            <p>• Exception Handling & Debugging</p>
            <p>• File Handling & LINQ in C#</p>
            {/* Add more modules similarly */}
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
      <Footer />

      <Modal
        title="Apply for .NET Full Stack Development Course"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: ".NET Full Stack Development Course" }}
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
              <Option value=".NET Full Stack Development Course">
                .NET Full Stack Development Course
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

export default NetFullstackDevelopmentComp;
