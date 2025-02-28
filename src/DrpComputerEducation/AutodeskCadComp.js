import { Button, Form, Input, message, Modal, Select } from "antd";
import React, { useState } from "react";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import autoDeskCADImg from "../images/autyodesk.webp";
import autoCADGeneralImg from "../images/autogen.webp";
import autoCADMechanicalImg from "../images/autocadmechanical.webp";
import autoCADCivilImg from "../images/civil.webp";
import threeDsMaxImg from "../images/3dmax.webp";
import revitArchitectureImg from "../images/autocadcivil.webp";
import revitMEPImg from "../images/revitqqqq.webp";
import vRayImg from "../images/vray.jpg";

const courses = [
  {
    title: "AutoDesk CAD (Computer-Aided Design)",
    description:
      "Fundamentals of CAD software used in engineering, construction, and manufacturing. Covers 2D drafting, 3D modeling, and blueprint reading.",
    image: autoDeskCADImg, // Replace with actual image import or path
  },
  {
    title: "AutoCAD (General)",
    description:
      "Versatile CAD software for 2D drafting and 3D modeling in multiple industries. Covers floor plans, schematics, layer management, and visualization.",
    image: autoCADGeneralImg, // Replace with actual image import or path
  },
  {
    title: "AutoCAD Mechanical",
    description:
      "Specialized AutoCAD version for mechanical design. Covers part design, engineering symbols, BOM, and parametric automation tools.",
    image: autoCADMechanicalImg, // Replace with actual image import or path
  },
  {
    title: "AutoCAD Civil",
    description:
      "Tailored for civil engineering and construction. Covers site plans, road layouts, surveying tools, and land development.",
    image: autoCADCivilImg, // Replace with actual image import or path
  },
  {
    title: "3Ds Max",
    description:
      "3D modeling, animation, and rendering software for architecture and game design. Covers texturing, character animation, and photorealistic rendering.",
    image: threeDsMaxImg, // Replace with actual image import or path
  },
  {
    title: "Revit (Architecture & BIM)",
    description:
      "A tool for architectural design and modeling. Covers BIM, structural design, construction planning, and 3D visualization.",
    image: revitArchitectureImg, // Replace with actual image import or path
  },
  {
    title: "Revit MEP (Mechanical, Electrical, Plumbing)",
    description:
      "Focuses on MEP systems for buildings. Covers HVAC, electrical wiring, plumbing layouts, and BIM-based MEP coordination.",
    image: revitMEPImg, // Replace with actual image import or path
  },
  {
    title: "V-Ray (Rendering & Visualization)",
    description:
      "High-quality rendering software for photorealistic designs. Covers lighting, shading, materials, and integration with 3Ds Max, Revit, and SketchUp.",
    image: vRayImg, // Replace with actual image import or path
  },
];
const AutodeskCadComp = () => {
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
        <h1 className="trending-courses-title">AutoDesk-CAD</h1>
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
        title="Register for  AutoDesk-CAD"
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
            serviceName: "AutoDesk-CAD",
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
              <Option value="AutoDesk-CAD">AutoDesk-CAD</Option>
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

export default AutodeskCadComp;
