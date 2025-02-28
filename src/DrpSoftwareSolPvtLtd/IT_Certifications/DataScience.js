import React, { useState } from "react";
import DrpSolHeader from "../../components/DrpSolHeader";
import DrpSoftwareNavbar from "../../components/DrpSoftwareNavbar";
import Footer from "../../components/Footer";
import "../../styles/DataScience.css"; // External CSS file for custom styling

// Import the image (make sure the path is correct)
import dataScienceImage from "../../images/data.jpg";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";

const DataScience = () => {
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
      <DrpSolHeader />
      <DrpSoftwareNavbar />

      {/* Container for all content */}
      <div className="container">
        {/* Hero Section with Image and Title */}
        <div className="hero-section-alo">
          <div className="hero-image-alo">
            <img src={dataScienceImage} alt="Data Science" />
          </div>
        </div>

        {/* Course Highlights Section */}
        <div className="course-highlights-sss">
          <h2>Why Choose Our Data Science Training Course?</h2>
          <ul>
            <li>
              ✅ Comprehensive Curriculum – Covers Python, Machine Learning, AI,
              Deep Learning & More
            </li>
            <li>
              ✅ Hands-on Training – Work on live projects and real-world case
              studies
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

        {/* Who Can Join Section */}
        <div className="who-can-join">
          <h2>Who Can Join This Course?</h2>
          <ul>
            <li>
              👨‍💻 Freshers & Graduates aspiring for a career in Data Science
            </li>
            <li>🔄 IT Professionals looking to upskill or switch careers</li>
            <li>📈 Business Analysts & Marketing Professionals</li>
            <li>🛠️ Developers who want to master Data Science & AI</li>
          </ul>
        </div>

        {/* Course Curriculum Section */}
        <div className="course-curriculum">
          <h2>Data Science Course Curriculum</h2>
          <div className="module">
            <h3>Module 1: Introduction to Data Science</h3>
            <ul>
              <li>What is Data Science?</li>
              <li>Importance of Data Science in Today’s World</li>
              <li>Data Science vs. Data Analytics vs. Machine Learning</li>
              <li>Role of a Data Scientist</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 2: Python for Data Science</h3>
            <ul>
              <li>Introduction to Python Programming</li>
              <li>Python Libraries: NumPy, Pandas, Matplotlib, Seaborn</li>
              <li>Data Manipulation & Visualization</li>
              <li>Exploratory Data Analysis (EDA)</li>
            </ul>
          </div>
          {/* Add more modules similarly */}
        </div>

        {/* What You Will Learn Section */}
        <div className="what-you-learn">
          <h2>What You Will Learn?</h2>
          <ul>
            <li>✔️ Work with real-world data & build predictive models</li>
            <li>✔️ Master Python, Machine Learning, and AI techniques</li>
            <li>✔️ Perform Data Cleaning, Visualization & EDA</li>
            <li>✔️ Work on Big Data & Cloud Deployment</li>
            <li>✔️ Build AI-powered Chatbots & Recommendation Systems</li>
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section">
          <h2>Enroll Now & Start Your Data Science Career!</h2>
          <p>📅 Next Batch Starting Soon</p>
          <p>🚀 100% Practical Training</p>
          <p>🎯 Limited Seats Available</p>
          <button className="enroll-button" onClick={showModal}>
            👉 Register Now
          </button>
        </div>
      </div>

      <Footer />

      <Modal
        title="Apply for DataScience"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "DataScience" }}
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
              <Option value="DataScience">DataScience</Option>
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

export default DataScience;
