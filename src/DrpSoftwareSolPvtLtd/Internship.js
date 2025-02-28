import React, { useState } from "react";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import { Button, Input, message, Modal, Select } from "antd";
import {
  CodeOutlined,
  MobileOutlined,
  BugOutlined,
  SketchOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import "../styles/Internship.css";
import internshipImg from "../images/internship.webp";
import { Form } from "antd";
import axios from "axios";

const Internship = () => {
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
  const internshipRoles = [
    {
      title: "Software Development Intern",
      description:
        "Assist in the development of custom software solutions, write code, participate in code reviews, and collaborate with the development team to create high-quality applications.",
      skills:
        "Java, Python, JavaScript, problem-solving skills, passion for learning.",
      icon: <CodeOutlined className="icon" />,
    },
    {
      title: "Mobile App Development Intern",
      description:
        "Work on the development and maintenance of mobile apps for iOS and Android platforms. Collaborate with the design and development teams to implement user-friendly features.",
      skills: "Xcode, Android Studio, Swift, Kotlin, creativity.",
      icon: <MobileOutlined className="icon" />,
    },
    {
      title: "Quality Assurance (QA) Intern",
      description:
        "Assist in manual and automated testing of software applications. Ensure the software is reliable, user-friendly, and free from bugs by creating and executing test cases.",
      skills: "Attention to detail, testing processes, Selenium, JIRA.",
      icon: <BugOutlined className="icon" />,
    },
    {
      title: "UI/UX Design Intern",
      description:
        "Work with the design team to create intuitive and visually appealing user interfaces. Contribute to the creation of wireframes, prototypes, and design systems.",
      skills: "Sketch, Figma, Adobe XD, user-centered design.",
      icon: <SketchOutlined className="icon" />,
    },
    {
      title: "IT Support Intern",
      description:
        "Provide support for internal systems, troubleshoot technical issues, and assist with the setup and maintenance of hardware and software infrastructure.",
      skills: "Basic IT systems, troubleshooting skills, willingness to learn.",
      icon: <ToolOutlined className="icon" />,
    },
  ];

  return (
    <>
      <DrpSolHeader />
      <DrpSoftwareNavbar />
      <div className="internship-container">
        <div className="internship-header">
          <img
            src={internshipImg}
            alt="Internship"
            className="internship-img"
          />
          <h1>Internship Opportunities</h1>
          <p>
            Gain real-world experience, work on live projects, and learn from
            industry experts at DRP Software Solutions Pvt Ltd.
          </p>
        </div>
        <div className="internship-grid">
          {internshipRoles.map((role, index) => (
            <div key={index} className="internship-card">
              <h3 className="internship-title">
                {role.icon} {role.title}
              </h3>
              <p className="internship-description">{role.description}</p>
              <strong>Skills Required:</strong> <p>{role.skills}</p>
            </div>
          ))}
        </div>
        <div className="internship-benefits">
          <h2>Internship Benefits:</h2>
          <ul>
            <li>
              Practical Experience: Gain experience working in a professional
              software development environment.
            </li>
            <li>
              Networking: Build connections with industry professionals and
              expand your professional network.
            </li>
            <li>
              Mentorship: Receive guidance from senior staff and mentors to help
              you grow in your career.
            </li>
            <li>
              Flexible Working Hours: We understand that interns are often
              students, so we offer flexible working hours to accommodate
              academic schedules.
            </li>
            <li>
              Certificate of Completion: At the end of your internship, you’ll
              receive a certificate acknowledging your hard work and
              contributions.
            </li>
            <li>
              Potential for Full-Time Employment: Top-performing interns are
              considered for full-time roles after the completion of their
              internship.
            </li>
          </ul>
        </div>
        <div className="internship-apply">
          <h2>How to Apply:</h2>
          <p>
            To apply for an internship at DRP Software Solutions Pvt Ltd, please
            send your updated resume and a cover letter to our email address. In
            your cover letter, tell us about your skills, why you're interested
            in joining our team, and how this internship aligns with your career
            goals.
          </p>
          <p>
            We look forward to seeing how you can contribute to our innovative
            and growing team!
          </p>
          <button className="edu-button" onClick={showModal}>
            Apply Now
          </button>
        </div>
      </div>
      <Footer />

      <Modal
        title="Apply for Internship"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Internship" }}
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
              <Option value="Internship">Internship</Option>
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

export default Internship;
