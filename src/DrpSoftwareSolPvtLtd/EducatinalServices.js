import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, message } from "antd";
import axios from "axios"; // Import Axios
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import {
  BookOutlined,
  SolutionOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "../styles/EducationalServices.css";
import eduImage from "../images/educatiobs.webp";

const { Option } = Select;

const EducationalServices = () => {
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
      <div className="edu-container">
        <img
          src={eduImage}
          alt="Educational Services"
          className="edu-top-image"
        />
        <h1 className="edu-heading">Our Educational Services</h1>
        <p className="edu-description">
          We provide innovative and technology-driven solutions for educational
          institutions. Our services include:
        </p>

        <div className="edu-card-container">
          <div className="edu-card">
            <BookOutlined className="edu-icon" />
            <h2>E-Learning Platforms</h2>
            <p>
              Developing customized e-learning platforms with interactive
              courses.
            </p>
          </div>
          <div className="edu-card">
            <SolutionOutlined className="edu-icon" />
            <h2>School Management Systems</h2>
            <p>
              Providing comprehensive software solutions for school
              administration.
            </p>
          </div>
          <div className="edu-card">
            <FileTextOutlined className="edu-icon" />
            <h2>Online Examination Systems</h2>
            <p>Secure and efficient online test-taking platforms.</p>
          </div>
        </div>

        <div className="expert-lectures">
          <h2 className="section-heading">Key Features of Expert Lectures</h2>
          <ul className="feature-list">
            <li>
              <strong>Industry Insights:</strong> Gain firsthand knowledge from
              experts.
            </li>
            <li>
              <strong>Emerging Technologies:</strong> Stay updated with AI,
              Blockchain, etc.
            </li>
            <li>
              <strong>Interactive Sessions:</strong> Q&A with industry
              professionals.
            </li>
            <li>
              <strong>Customized Topics:</strong> Tailored lectures on software,
              data science, etc.
            </li>
          </ul>

          <h2 className="section-heading">Example Topics</h2>
          <ul className="topic-list">
            <li>Future of AI and Machine Learning</li>
            <li>Blockchain Applications</li>
            <li>Cloud Computing in Enterprises</li>
            <li>Cybersecurity Trends</li>
            <li>Scalable Systems with DevOps</li>
          </ul>
        </div>

        <div className="edu-cta">
          <p>
            To enroll in our programs or schedule an expert lecture, contact us
            at [contact details].
          </p>
          <button className="edu-button" onClick={showModal}>
            Apply Now
          </button>
        </div>
      </div>

      <Footer />

      {/* Modal Form */}
      <Modal
        title="Apply for Educational Services"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Educational Service" }}
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
              <Option value="Educational Service">Educational Service</Option>
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

export default EducationalServices;
