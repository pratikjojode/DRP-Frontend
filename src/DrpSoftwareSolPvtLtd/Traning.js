import React, { useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaBug,
  FaRobot,
} from "react-icons/fa";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import "../styles/Training.css";
import trainingBanner from "../images/traning.webp";
import { Form } from "antd";
import { Button, Input, message, Modal, Select } from "antd";
import axios from "axios";

const trainingPrograms = [
  {
    title: "Software Development Training",
    description:
      "Master coding and software development practices with hands-on experience in various programming languages and frameworks.",
    topics: [
      "Introduction to Programming (Java, Python, C++)",
      "Object-Oriented Programming (OOP)",
      "Web Development (HTML, CSS, JavaScript, React)",
      "Databases (SQL, NoSQL)",
      "Agile Development Methodologies",
    ],
    duration: "6–8 weeks",
    icon: <FaCode className="training-icon" />,
  },
  {
    title: "Mobile App Development Training",
    description:
      "Learn how to build mobile applications for Android and iOS using top frameworks and industry tools.",
    topics: [
      "Android Development (Java, Kotlin, Android Studio)",
      "iOS Development (Swift, Xcode)",
      "Mobile App UI/UX Design",
      "Cross-Platform Development (React Native, Flutter)",
      "App Testing and Debugging",
    ],
    duration: "6–8 weeks",
    icon: <FaMobileAlt className="training-icon" />,
  },
  {
    title: "UI/UX Design Training",
    description:
      "Develop expertise in designing intuitive and user-friendly applications using modern tools.",
    topics: [
      "User-Centered Design (UCD)",
      "Design Tools (Sketch, Figma, Adobe XD)",
      "Prototyping and Wireframing",
      "Usability Testing and Iteration",
      "Responsive Design for Web and Mobile",
    ],
    duration: "4–6 weeks",
    icon: <FaPaintBrush className="training-icon" />,
  },
  {
    title: "Cloud Computing & DevOps Training",
    description:
      "Learn cloud technologies and DevOps practices to deploy and manage applications efficiently.",
    topics: [
      "Cloud Platforms (AWS, Azure, Google Cloud)",
      "Virtualization and Containers (Docker, Kubernetes)",
      "CI/CD Pipelines and Automation",
      "Infrastructure as Code (Terraform)",
      "Cloud Security and Best Practices",
    ],
    duration: "6–8 weeks",
    icon: <FaCloud className="training-icon" />,
  },
  {
    title: "Quality Assurance & Software Testing Training",
    description:
      "Become an expert in software testing, including both manual and automated testing techniques.",
    topics: [
      "Software Testing Fundamentals",
      "Manual Testing Techniques (Test Plans, Test Cases)",
      "Automation Testing Tools (Selenium, JUnit)",
      "Performance Testing and Bug Tracking",
      "Agile Testing Methodologies",
    ],
    duration: "4–6 weeks",
    icon: <FaBug className="training-icon" />,
  },
  {
    title: "Artificial Intelligence & Machine Learning Training",
    description:
      "Learn AI & ML techniques to build intelligent systems and analyze complex data.",
    topics: [
      "Introduction to AI and ML",
      "Supervised and Unsupervised Learning",
      "Neural Networks and Deep Learning",
      "Natural Language Processing (NLP)",
      "AI and ML Tools (TensorFlow, Scikit-Learn)",
    ],
    duration: "8–10 weeks",
    icon: <FaRobot className="training-icon" />,
  },
];

const Training = () => {
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

      <div className="training-container">
        <div className="training-intro">
          <img
            src={trainingBanner}
            alt="Training at DRP Software Solutions"
            className="training-banner"
          />
          <h1>Training Programs at DRP Software Solutions</h1>
          <p>
            Enhance your technical skills and stay updated with the latest
            technologies. Our comprehensive training programs provide hands-on
            experience and expert guidance.
          </p>
        </div>

        <div className="training-programs">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="training-card">
              <div className="training-icon-wrapper">{program.icon}</div>
              <div className="training-details">
                <h2>{program.title}</h2>
                <p>{program.description}</p>
                <ul>
                  {program.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
                <p className="training-duration">
                  Duration: {program.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="training-description">
          <h1>Training Programs at DRP Software Solutions Pvt Ltd</h1>
          <p>
            At DRP Software Solutions Pvt Ltd, we believe in continuous learning
            and professional development. Our training programs are designed to
            help individuals and teams enhance their technical skills, stay
            updated with the latest technologies, and build a strong foundation
            for success in the ever-evolving software industry.
          </p>
          <div className="training-section">
            <h2>Why Choose Training at DRP Software Solutions?</h2>
            <ul>
              <li>
                Expert Instructors: Our trainers are experienced professionals
                with years of industry experience.
              </li>
              <li>
                Hands-On Learning: Work on live projects, coding exercises, and
                real-life business challenges.
              </li>
              <li>
                Industry-Relevant Topics: Covering software development, mobile
                app development, cloud computing, AI, UI/UX design, and more.
              </li>
              <li>
                Flexible Training Options: Choose between intensive short-term
                training or ongoing sessions, both in-person and online.
              </li>
              <li>
                Career-Focused Approach: Gain practical skills that will help
                you succeed in your career.
              </li>
            </ul>
          </div>
          <div className="training-section">
            <h2>Training Programs Offered:</h2>
            <ul>
              <li>
                <strong>Software Development Training</strong> - Learn
                programming languages, OOP concepts, web development, databases,
                and Agile methodologies. (Duration: 6–8 weeks)
              </li>
              <li>
                <strong>Mobile App Development Training</strong> - Covers
                Android, iOS, UI/UX design, and cross-platform development.
                (Duration: 6–8 weeks)
              </li>
              <li>
                <strong>UI/UX Design Training</strong> - Learn user-centered
                design, design tools (Figma, Adobe XD), prototyping, and
                usability testing. (Duration: 4–6 weeks)
              </li>
              <li>
                <strong>Cloud Computing & DevOps Training</strong> - Explore
                AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and cloud
                security. (Duration: 6–8 weeks)
              </li>
              <li>
                <strong>QA & Software Testing Training</strong> - Covers manual
                and automated testing (Selenium, JUnit), performance testing,
                and Agile methodologies. (Duration: 4–6 weeks)
              </li>
              <li>
                <strong>AI & Machine Learning Training</strong> - Learn AI
                fundamentals, neural networks, NLP, TensorFlow, and
                Scikit-Learn. (Duration: 8–10 weeks)
              </li>
            </ul>
          </div>
          <div className="training-section">
            <h2>Why Our Training Stands Out:</h2>
            <ul>
              <li>Industry-Relevant Curriculum</li>
              <li>Certification upon completion</li>
              <li>Personalized Guidance</li>
              <li>Job Placement Assistance</li>
            </ul>
          </div>
          <div className="training-section">
            <h2>How to Apply:</h2>
            <p>
              If you're interested in joining one of our training programs,
              please reach out to us with your resume and the program you're
              interested in. Our team will get in touch to discuss the next
              steps.
            </p>
            <button className="edu-button" onClick={showModal}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Footer />

      <Modal
        title="Apply for Training Services"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "Training" }}
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
              <Option value="traning">Training</Option>
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

export default Training;
