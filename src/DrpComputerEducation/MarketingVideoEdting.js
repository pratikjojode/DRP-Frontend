import React from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import digitalMarketingImg from "../images/digitalmaarketing.webp";
import videoEditingImg from "../images/video.webp";
import premiereProImg from "../images/adobepremier.webp";
import afterEffectsImg from "../images/afterefects.webp";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import { useState } from "react";

const courses = [
  {
    title: "Digital Marketing",
    description:
      "Covers SEO, social media marketing, Google Ads, content marketing, email marketing, and affiliate marketing to build an online presence.",
    image: digitalMarketingImg, // Replace with actual image import or path
  },
  {
    title: "Video Editing",
    description:
      "Learn professional video editing techniques, including cutting, effects, color grading, and motion graphics using industry-standard software.",
    image: videoEditingImg, // Replace with actual image import or path
  },
  {
    title: "Adobe Premiere Pro",
    description:
      "A professional video editing software for films, ads, and social media. Covers multi-camera editing, color grading, and audio enhancement.",
    image: premiereProImg, // Replace with actual image import or path
  },
  {
    title: "Adobe After Effects",
    description:
      "A motion graphics and VFX tool for animations and special effects. Covers 2D/3D tracking, compositing, and advanced visual effects.",
    image: afterEffectsImg, // Replace with actual image import or path
  },
];
const MarketingVideoEdting = () => {
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
        <h1 className="trending-courses-title">Marketing-Video-Editing</h1>
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
        title="Register for  Marketing-Video-Editing"
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
            serviceName: "Marketing-Video-Editing",
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
              <Option value="Marketing-Video-Editings">
                Marketing-Video-Editing
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

export default MarketingVideoEdting;
