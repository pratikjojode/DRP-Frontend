import React, { useState } from "react";
import DrpSolHeader from "../../components/DrpSolHeader";
import DrpSoftwareNavbar from "../../components/DrpSoftwareNavbar";
import Footer from "../../components/Footer";
import "../../styles/SalesForce.css";
import salesforceImage from "../../images/sales.webp"; // AI-generated image
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";

const SalesForce = () => {
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
      <div className="salesforce-container">
        {/* Banner Section */}
        <div className="salesforce-banner">
          <img src={salesforceImage} alt="Salesforce Training" />
        </div>
        <h1 className="sales-text">SalesForce Course</h1>

        {/* Course Introduction */}
        <section className="salesforce-intro">
          <p>
            Are you looking to build a career in Salesforce CRM? Our Salesforce
            Training Course is designed to help beginners and professionals
            master Salesforce Administration, Development, and Cloud
            technologies. Learn to manage customer relationships, automate
            business processes, and develop custom applications on the
            Salesforce platform.
          </p>
          <ul>
            <li>✅ No prior experience required</li>
            <li>✅ Hands-on training with real-world scenarios</li>
            <li>✅ Learn Salesforce Admin, Development & Lightning</li>
            <li>✅ Certification guidance & job assistance</li>
          </ul>
        </section>

        {/* Why Choose Our Course */}
        <section className="salesforce-content">
          <h2>Why Choose Our Salesforce Training Course?</h2>
          <ul>
            <li>
              🔹 Comprehensive Curriculum – Covers Salesforce Admin, Development
              & Cloud
            </li>
            <li>
              🔹 Hands-on Training – Work on live projects and case studies
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
        </section>

        {/* Who Can Join */}
        <section className="salesforce-content">
          <h2>Who Can Join This Course?</h2>
          <ul>
            <li>👨‍💻 Freshers & Graduates aspiring for a career in Salesforce</li>
            <li>🔄 IT Professionals looking to upskill or switch careers</li>
            <li>📈 Sales & Marketing Professionals wanting to master CRM</li>
            <li>🛠️ Developers who want to learn Salesforce Development</li>
          </ul>
        </section>

        {/* Course Curriculum */}
        <section className="salesforce-content">
          <h2>Salesforce Course Curriculum</h2>
          <div className="course-module">
            <h3>Module 1: Introduction to Salesforce & CRM</h3>
            <ul>
              <li>What is CRM?</li>
              <li>Introduction to Salesforce & Its Ecosystem</li>
              <li>Salesforce Editions & Cloud Offerings</li>
              <li>Understanding Salesforce Architecture</li>
            </ul>
          </div>

          <div className="course-module">
            <h3>Module 2: Salesforce Administration (Admin)</h3>
            <ul>
              <li>Salesforce Organization Setup</li>
              <li>User Management (Roles & Profiles)</li>
              <li>Security & Access Control</li>
              <li>Object, Fields & Relationships</li>
              <li>Workflow Rules & Process Automation</li>
              <li>Reports & Dashboards in Salesforce</li>
            </ul>
          </div>

          <div className="course-module">
            <h3>Module 3: Salesforce Development (Apex & Visualforce)</h3>
            <ul>
              <li>Introduction to Apex Programming</li>
              <li>Object-Oriented Programming in Apex</li>
              <li>Writing Triggers in Apex</li>
              <li>SOQL & SOSL (Salesforce Query Languages)</li>
              <li>Visualforce Pages & Components</li>
            </ul>
          </div>

          <div className="course-module">
            <h3>Module 4: Salesforce Lightning Experience (LWC & Aura)</h3>
            <ul>
              <li>Introduction to Salesforce Lightning</li>
              <li>Lightning Web Components (LWC)</li>
              <li>Building Lightning Apps & UI Components</li>
              <li>Customizing Salesforce with Lightning</li>
            </ul>
          </div>
        </section>

        {/* Course Features */}
        <section className="salesforce-content">
          <h2>Course Features</h2>
          <ul>
            <li>📚 Course Duration: 8-10 Weeks</li>
            <li>🎥 Mode: Online/Offline</li>
            <li>📜 Certificate of Completion: Yes</li>
            <li>💼 Job Assistance: Resume Building & Interview Preparation</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className="enroll-section">
          <h2 className="enroll-title">Enroll Now & Start Your Sales-Force!</h2>
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
        title="Apply for Sales-Force"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Sales-Force" }}
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
              <Option value="Sales-Force">Sales-Force</Option>
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

export default SalesForce;
