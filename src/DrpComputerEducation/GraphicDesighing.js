import { Input, message, Modal, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Form } from "antd";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import graphicDesignImg from "../images/graphic designinh.webp";
import photoshopImg from "../images/adobephtoshop.webp";
import illustratorImg from "../images/ill.webp";
import indesignImg from "../images/indesighn.webp";
import { Button } from "antd";

const courses = [
  {
    title: "Graphic Design Course",
    description:
      "A comprehensive course covering the fundamentals of visual design, including color theory, typography, branding, UI/UX basics, and image editing.",
    image: graphicDesignImg, // Replace with actual image import or path
  },
  {
    title: "Adobe Photoshop",
    description:
      "A powerful tool for image editing and digital art creation. Covers photo retouching, layers, digital painting, and web graphics.",
    image: photoshopImg, // Replace with actual image import or path
  },
  {
    title: "Adobe Illustrator",
    description:
      "A vector-based design software used for creating scalable graphics. Learn logo design, typography, icon creation, and shape manipulation.",
    image: illustratorImg, // Replace with actual image import or path
  },
  {
    title: "Adobe InDesign",
    description:
      "A layout and publishing tool used for designing print and digital content. Covers magazine layouts, typography, and print media.",
    image: indesignImg, // Replace with actual image import or path
  },
];
const GraphicDesighing = () => {
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
        <h1 className="trending-courses-title">Graphic-Designing Course</h1>
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
        title="Register for  Graphic-Designing Course"
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
            serviceName: "Graphic-Designing Course",
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
              <Option value="Graphic-Designing Course">
                Graphic-Designing Course
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

export default GraphicDesighing;
