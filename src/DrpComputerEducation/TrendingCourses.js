import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import "../styles/TrendingCourses.css";
import msCitImg from "../images/mscit.webp";
import tallyImg from "../images/klic.webp";
import msOfficeImg from "../images/admsoffice.webp";
import ciaImg from "../images/cia.webp";
import acipImg from "../images/acip.webp";
import cbaImg from "../images/cba.webp";
import advTallyImg from "../images/adtally.webp";
import advExcelImg from "../images//exel.webp";
import { Button, Input, message, Modal, Select } from "antd";
import axios from "axios";
import { Form } from "antd";

const courses = [
  {
    title: "MS-CIT",
    description:
      "A basic IT literacy course covering fundamentals of computers, internet, MS Office, digital literacy, and cybersecurity.",
    image: msCitImg,
  },
  {
    title: "KLiC Tally",
    description:
      "Certification course focusing on Tally, covering accounting principles, inventory management, GST, and taxation.",
    image: tallyImg,
  },
  {
    title: "Advanced MS Office",
    description:
      "Covers Microsoft Word, Excel, PowerPoint, Outlook, and Access with advanced features like macros and pivot tables.",
    image: msOfficeImg,
  },
  {
    title: "CIA (Certified Industrial Accountant)",
    description:
      "Job-oriented course focusing on financial accounting, taxation, payroll, and auditing with software like Tally and SAP.",
    image: ciaImg,
  },
  {
    title: "ACIP (Advanced Certified Industrial Professional)",
    description:
      "Specialized course including financial accounting, business management, and taxation with hands-on training in SAP and GST.",
    image: acipImg,
  },
  {
    title: "CBA (Certificate in Business Accounting)",
    description:
      "Foundational course in business accounting principles, taxation, and finance management.",
    image: cbaImg,
  },
  {
    title: "Advanced Tally",
    description:
      "Mastering Tally ERP 9/Tally Prime with in-depth accounting and GST modules, including TDS and payroll management.",
    image: advTallyImg,
  },
  {
    title: "Advanced Excel",
    description:
      "Covers data analysis, dashboards, macros, and VBA to automate tasks and manage large datasets.",
    image: advExcelImg,
  },
];

const TrendingCourses = () => {
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
      <div className="trending-courses-container">
        <h1 className="trending-courses-title">Trending Courses</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text">
          Want to enhance your skills? Join our Trending Courses today!
        </h1>

        <button onClick={showModal}>Apply Now</button>
      </div>
      <Footer />

      <Modal
        title="Register for  Trending Coursese"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            serviceName: "Trending Courses",
          }}
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
              <Option value="Trending Courses">Trending Courses</Option>
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

export default TrendingCourses;
