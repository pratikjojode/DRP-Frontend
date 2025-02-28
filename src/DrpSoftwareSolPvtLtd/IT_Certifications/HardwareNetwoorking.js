import React from "react";
import DrpSolHeader from "../../components/DrpSolHeader";
import DrpSoftwareNavbar from "../../components/DrpSoftwareNavbar";
import Footer from "../../components/Footer";
import "../../styles/HardwareNetwoorking.css";
import networkingImage from "../../images/hardwrae.webp"; // Add your image path
import { useState } from "react";
import { Modal, Form, Input, Button, Select, message } from "antd";
import axios from "axios";
const HardwareNetworking = () => {
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
      <div className="networking-container">
        <header className="networking-header">
          <img
            src={networkingImage}
            alt="Networking Banner"
            className="networking-image"
          />
          <h1>Hardware & Networking (CCNA, CCNP, CCIE) Training Course</h1>
          <p>Become a Certified Networking Expert</p>
        </header>

        <section className="networking-overview">
          <p>
            Looking to build a career in networking and IT infrastructure? Our
            Hardware & Networking Course covers everything from basic computer
            hardware and troubleshooting to advanced networking concepts. Learn
            from industry experts and get hands-on experience with Cisco
            networking technologies (CCNA, CCNP, CCIE) to prepare for top IT
            certifications.
          </p>
          <ul>
            <li>✅ No prior experience required</li>
            <li>✅ Covers CCNA, CCNP & CCIE Networking Certifications</li>
            <li>✅ Hands-on training with real-world networking labs</li>
            <li>✅ Certification guidance & job assistance</li>
          </ul>
        </section>

        <section className="networking-benefits">
          <h2>Why Choose Our Hardware & Networking Course?</h2>
          <ul>
            <li>
              🔹 Comprehensive Curriculum – Covers hardware, networking,
              security & Cisco certifications
            </li>
            <li>
              🔹 Hands-on Training – Work on real networking devices &
              simulations
            </li>
            <li>
              🔹 Expert Mentors – Learn from certified networking professionals
            </li>
            <li>
              🔹 Flexible Learning – Online, offline, and self-paced options
            </li>
            <li>
              🔹 Certification & Job Assistance – Get certified and prepare for
              job interviews
            </li>
          </ul>
        </section>

        <section className="networking-eligibility">
          <h2>Who Can Join This Course?</h2>
          <ul>
            <li>
              👨‍💻 Students & Freshers aspiring to build a career in networking
            </li>
            <li>
              🔄 IT Professionals looking to upskill in networking & security
            </li>
            <li>
              🛠️ System Administrators & Network Engineers wanting Cisco
              certifications
            </li>
            <li>
              📈 Entrepreneurs & Freelancers interested in IT infrastructure
              management
            </li>
          </ul>
        </section>

        <section className="networking-curriculum">
          <h2>Course Curriculum</h2>
          <div className="curriculum-section">
            <h3>Module 1: Computer Hardware Basics</h3>
            <ul>
              <li>
                Introduction to Computer Components (CPU, RAM, HDD, SSD,
                Motherboard)
              </li>
              <li>Power Supply & Cooling System</li>
              <li>Input/Output Devices (Monitors, Keyboards, Printers)</li>
              <li>Assembling & Disassembling a Computer</li>
              <li>BIOS/UEFI Configuration & Boot Process</li>
            </ul>
          </div>

          <div className="curriculum-section">
            <h3>Module 2: Operating Systems & Troubleshooting</h3>
            <ul>
              <li>Installing Windows & Linux Operating Systems</li>
              <li>System Configuration & User Management</li>
              <li>Disk Partitioning & File System Management</li>
              <li>Hardware Troubleshooting Techniques</li>
              <li>Virus Removal & System Optimization</li>
            </ul>
          </div>

          <div className="curriculum-section">
            <h3>Module 3: Networking Fundamentals (CCNA)</h3>
            <ul>
              <li>Introduction to Networking & Network Types</li>
              <li>OSI & TCP/IP Models</li>
              <li>IP Addressing & Subnetting</li>
              <li>Configuring Routers & Switches</li>
              <li>VLANs, STP & Routing Protocols (RIP, OSPF, EIGRP)</li>
              <li>Wireless Networking & Configuration</li>
            </ul>
          </div>
        </section>

        <section className="networking-features">
          <h2>What You Will Learn?</h2>
          <ul>
            <li>✔️ Assemble, troubleshoot & maintain computer hardware</li>
            <li>✔️ Configure and manage networks using Cisco devices</li>
            <li>
              ✔️ Implement network security and cybersecurity best practices
            </li>
            <li>✔️ Design, deploy & troubleshoot enterprise-level networks</li>
            <li>✔️ Prepare for CCNA, CCNP & CCIE certifications</li>
          </ul>
        </section>

        <section className="networking-course-details">
          <h2>Course Details</h2>
          <ul>
            <li>📚 Course Duration: 10-12 Weeks</li>
            <li>🎥 Mode: Online/Offline</li>
            <li>📜 Certificate of Completion: Yes</li>
            <li>💼 Job Assistance: Resume Building & Interview Preparation</li>
          </ul>
        </section>
        <div className="enroll-section">
          <h2 className="enroll-title">
            Enroll Now & Start Your Hardware & Networking (CCNA, CCNP, CCIE)
            Training Course!
          </h2>
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
        title="Apply for Hardware & Networking (CCNA, CCNP, CCIE) Training Course"
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
            serviceName:
              "Hardware & Networking (CCNA, CCNP, CCIE) Training Course",
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
              <Option value="Hardware & Networking (CCNA, CCNP, CCIE) Training Course">
                Hardware & Networking (CCNA, CCNP, CCIE) Training Course
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

export default HardwareNetworking;
