import React, { useState } from "react";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import { Button, Card, Form, Input, message, Modal, Select } from "antd";

import {
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import projectImage from "../images/projectssssss.webp";
import "../styles/Projects.css";
import axios from "axios";

const projectCategories = [
  {
    title: "Software Development Projects",
    icon: <FaCode size={30} color="#003366" />,
    projects: [
      {
        name: "E-commerce Web Application",
        description:
          "Build a dynamic and user-friendly e-commerce platform with features like real-time product search, secure payment integration, and personalized recommendations.",
        technologies: "HTML/CSS, JavaScript, React.js, Node.js, MongoDB",
      },
      {
        name: "Hospital Management System",
        description:
          "Develop a system for managing patient records, appointments, and billing information for hospitals.",
        technologies: "Java, Spring Boot, MySQL, Angular",
      },
    ],
  },
  {
    title: "Machine Learning & AI Projects",
    icon: <FaRobot size={30} color="#003366" />,
    projects: [
      {
        name: "Customer Segmentation Using K-Means Clustering",
        description:
          "Use machine learning algorithms to segment customers into distinct groups based on purchasing behavior for targeted marketing strategies.",
        technologies: "Python, Scikit-learn, TensorFlow, Pandas",
      },
      {
        name: "AI-Based Chatbot for Customer Support",
        description:
          "Develop a chatbot that understands and responds to customer queries in natural language, providing instant support.",
        technologies: "Python, NLTK, TensorFlow, Dialogflow",
      },
    ],
  },
  {
    title: "Data Science & Big Data Projects",
    icon: <FaDatabase size={30} color="#003366" />,
    projects: [
      {
        name: "Real-Time Traffic Prediction Using Big Data Analytics",
        description:
          "Analyze real-time traffic data from sensors and cameras to predict congestion patterns and suggest optimal routes.",
        technologies: "Apache Hadoop, Apache Spark, Python, Kafka",
      },
      {
        name: "Customer Sentiment Analysis on Social Media Data",
        description:
          "Analyze social media data to gauge customer sentiment for a brand.",
        technologies: "Python, TextBlob, Twitter API, NLTK",
      },
    ],
  },
  {
    title: "Cloud Computing & DevOps Projects",
    icon: <FaCloud size={30} color="#003366" />,
    projects: [
      {
        name: "Cloud-Based File Storage System",
        description:
          "Develop a secure, scalable cloud-based file storage system for managing and sharing files.",
        technologies: "AWS, Node.js, React.js, MongoDB",
      },
      {
        name: "CI/CD Pipeline for Automated Deployments",
        description:
          "Set up a continuous integration and delivery pipeline to automate software testing and deployment.",
        technologies: "Jenkins, Docker, Kubernetes, AWS",
      },
    ],
  },
  {
    title: "Cybersecurity Projects",
    icon: <FaShieldAlt size={30} color="#003366" />,
    projects: [
      {
        name: "Penetration Testing of Web Applications",
        description:
          "Conduct penetration testing to identify vulnerabilities in web applications and suggest remediation strategies.",
        technologies: "Kali Linux, OWASP ZAP, Burp Suite",
      },
      {
        name: "Building a Secure Authentication System with Blockchain",
        description:
          "Implement a blockchain-based authentication system for secure login and access control.",
        technologies: "Ethereum, Solidity, Node.js",
      },
    ],
  },
  {
    title: "IoT (Internet of Things) Projects",
    icon: <IoIosGlobe size={30} color="#003366" />,
    projects: [
      {
        name: "Smart Home Automation System",
        description:
          "Develop an IoT-based system for remotely controlling home appliances.",
        technologies: "Arduino, Raspberry Pi, ESP32, Android Studio",
      },
      {
        name: "IoT-Based Environmental Monitoring System",
        description:
          "Create a system for monitoring air quality, temperature, and humidity in real-time.",
        technologies: "Arduino, MQTT, Node.js, AWS IoT",
      },
    ],
  },
];

const Projects = () => {
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
      <div className="projects-container">
        <img src={projectImage} alt="Projects" className="project-banner" />
        <h1 className="projects-title">Academic & Industrial Projects</h1>
        <p className="projects-description">
          Gain real-world experience by working on industry-relevant projects at
          DRP Software Solutions Pvt Ltd.
        </p>

        <div className="projects-grid">
          {projectCategories.map((category, index) => (
            <Card
              key={index}
              title={
                <div className="project-header">
                  {category.icon} {category.title}
                </div>
              }
              className="project-card"
            >
              {category.projects.map((project, idx) => (
                <div key={idx} className="project-item">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-technologies">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                </div>
              ))}
            </Card>
          ))}
        </div>
        {/* Why Choose Section */}
        <div className="why-choose-section">
          <h2>
            Why Choose DRP Software Solutions Pvt Ltd for Your Academic
            Projects?
          </h2>
          <ul>
            <li>
              <strong>Industry-Relevant Experience:</strong> Work on real-world
              projects that solve current industry challenges and provide
              valuable solutions.
            </li>
            <li>
              <strong>Diverse Domains:</strong> Explore projects across various
              domains, including software development, machine learning, IoT,
              cybersecurity, cloud computing, and more.
            </li>
            <li>
              <strong>Hands-On Learning:</strong> Get practical exposure to
              modern technologies and methodologies that will prepare you for a
              successful career in the tech industry.
            </li>
            <li>
              <strong>Expert Mentorship:</strong> Collaborate with experienced
              professionals who provide guidance and feedback, helping you
              develop industry-ready skills.
            </li>
            <li>
              <strong>Collaborative Environment:</strong> Work in a
              team-oriented environment that fosters creativity, learning, and
              innovation.
            </li>
          </ul>
        </div>

        {/* How to Apply Section */}
        <div className="how-to-apply-section">
          <h2>How to Apply</h2>
          <p>
            If you’re a <strong>Diploma, BE/B.Tech, ME/M.Tech, or Ph.D.</strong>{" "}
            student looking for an exciting project opportunity to work on, get
            in touch with us at our email address.
          </p>
          <p>
            We offer both <strong>short-term</strong> and{" "}
            <strong>long-term</strong> project opportunities for students, where
            you can gain practical experience and contribute to impactful
            innovations.
          </p>
          <button className="edu-button" onClick={showModal}>
            Apply Now
          </button>
        </div>
      </div>
      <Footer />
      <Modal
        title="Apply for Projects"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Projects" }}
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
              <Option value="projects">Projects</Option>
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

export default Projects;
