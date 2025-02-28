import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Button, Form, Input, message, Modal, Select } from "antd";
import animationImg from "../images/3d.webp";
import shareMarketImg from "../images/sharemarket.webp";
import sapImg from "../images/sap.webp";
import dataScienceImg from "../images/data.jpg";

const courses = [
  {
    title: "3D Character Animation",
    description:
      "Focuses on creating realistic and stylized 3D animations for movies, games, and advertisements. Software: Blender, Maya, 3ds Max, Cinema 4D.",
    image: animationImg,
  },
  {
    title: "Share Market Course",
    description:
      "Covers stock trading, investment strategies, technical analysis, and risk management. Includes NSE, BSE, SEBI regulations, and cryptocurrency trading.",
    image: shareMarketImg,
  },
  {
    title: "SAP Course",
    description:
      "Covers SAP ERP software for enterprise resource planning. Modules: SAP FICO, SAP MM, SAP SD, SAP HCM, and SAP ABAP.",
    image: sapImg,
  },
  {
    title: "Data Science",
    description:
      "Combines statistics, programming, and machine learning for data analysis. Covers Python, SQL, data visualization, machine learning, and AI.",
    image: dataScienceImg,
  },
];
const NewCourses = () => {
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
        <h1 className="trending-courses-title">NewCourses</h1>
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
        title="Register for  New Courses"
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
            serviceName: "New Courses",
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
              <Option value="New Courses">New Courses</Option>
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

export default NewCourses;
