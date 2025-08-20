import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrpSolHeader from "../components/DrpSolHeader";
import DrpSoftwareNavbar from "../components/DrpSoftwareNavbar";
import Footer from "../components/Footer";
import heroBanner from "../images/WhatsApp Image 2025-02-11 at 13.06.23_6f7d264e.jpg";
import innovation from "../images/inovation.webp";
import ai from "../images/aiml.png";
import block from "../images/block.png";
import cloud from "../images/cloudcom.png";
import reactLogo from "../images/react.png";
import node from "../images/nodejs.webp";
import python from "../images/python.webp";
import webdev from "../images/webdev.webp";
import clouds from "../images/clouds.webp";
import ui from "../images/uiux.jpg";
import aa from "../images/aimlll.webp";
import bb from "../images/datanalayisis.webp";
import cyber from "../images/cybesecuirty.webp";
import "../styles/drpsoftrwareHome.css";
import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";

const DrpSoftwareSolHome = () => {
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

      {/* Hero Section - Image Left, Content Right */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              At{" "}
              <span className="black">
                <span className="more-small smaller">SAAR</span>DRP Software
                Solutions ,
              </span>{" "}
              we are a forward-thinking technology company committed to
              delivering cutting-edge software solutions that empower businesses
              to thrive in an ever-evolving digital world.
            </h1>
            <p>
              With a team of passionate and innovative professionals, we
              specialize in providing customized software development, cloud
              services, IT consulting, and enterprise solutions. Our mission is
              to help organizations optimize their processes, enhance their
              digital presence, and drive growth through robust and scalable
              technology solutions.
            </p>
            <button className="get-started" onClick={showModal}>
              Get Started
            </button>
          </div>
          <div className="hero-image">
            <img src={heroBanner} alt="Hero Banner" />
          </div>
        </div>
      </section>

      <section className="our-story">
        <div className="container-sol">
          <div className="story-content">
            <h2>Our Story </h2>
            <p>
              At <span className="more-small">SAAR</span>DRP Software Solutions
              , we believe that the journey of innovation begins with a simple
              idea, and it’s the passion to turn that idea into reality that
              drives us forward every day. Our story is one of vision,
              determination, and a relentless pursuit of excellence. What
              started as a small team with big dreams has grown into a trusted
              partner for businesses across industries, delivering
              state-of-the-art software solutions that transform the way
              companies operate.
            </p>

            <h3>The Beginning: A Vision for Innovation</h3>
            <p>
              Our journey began with the idea of creating a company that could
              bridge the gap between technological potential and business needs.
              Founded by a group of passionate software engineers and
              visionaries, DRP Software Solutions Pvt Ltd set out with a clear
              mission: to provide businesses with innovative, reliable, and
              scalable software solutions that drive growth and efficiency.
            </p>

            <h3>Growth and Expansion</h3>
            <p>
              As our expertise grew, so did our client base. Over the years,
              we’ve expanded our reach to serve a wide range of industries,
              including healthcare, finance, e-commerce, logistics, education,
              and more. From building user-friendly websites to developing
              complex enterprise systems, DRP Software Solutions Pvt Ltd has
              become a trusted name for delivering high-quality, tailor-made
              software solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="company-values">
        <div className="container">
          {/* Core Values Section */}
          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🚀 Innovation</h3>
                <p>
                  We continuously explore new technologies and methodologies to
                  deliver solutions that meet the evolving needs of our clients.
                </p>
              </div>
              <div className="value-card">
                <h3>🎯 Quality</h3>
                <p>
                  Quality is at the heart of everything we do, ensuring every
                  solution meets the highest standards of performance.
                </p>
              </div>
              <div className="value-card">
                <h3>🤝 Integrity</h3>
                <p>
                  We believe in building long-term relationships based on trust
                  and transparency.
                </p>
              </div>
              <div className="value-card">
                <h3>💡 Customer-Centricity</h3>
                <p>
                  Our clients are our partners, and we collaborate closely to
                  drive real value.
                </p>
              </div>
              <div className="value-card">
                <h3>🏆 Excellence</h3>
                <p>
                  We strive for excellence in every project, ensuring continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="expertise-section">
            <h2>Our Expertise: Turning Vision into Reality</h2>
            <p>
              What sets us apart is our ability to bring ideas to life through
              technology. We specialize in a range of services, from custom
              software development and mobile app development to cloud computing
              and UI/UX design.
            </p>
            <p>
              Our skilled team of developers, designers, and engineers work
              hand-in-hand with clients to craft bespoke solutions that align
              with their business goals.
            </p>
            <div className="expertise-grid">
              <div className="expertise-card">
                <img src={webdev} alt="Web & Mobile Development" />
                <span>Web & Mobile Development</span>
              </div>
              <div className="expertise-card">
                <img src={clouds} alt="Cloud Computing" />
                <span>Cloud Computing</span>
              </div>
              <div className="expertise-card">
                <img src={ui} alt="UI/UX Design" />
                <span>UI/UX Design</span>
              </div>
              <div className="expertise-card">
                <img src={aa} alt="AI & Machine Learning" />
                <span>AI & Machine Learning</span>
              </div>
              <div className="expertise-card">
                <img src={bb} alt="Data Analytics" />
                <span>Data Analytics</span>
              </div>
              <div className="expertise-card">
                <img src={cyber} alt="Cybersecurity Solutions" />
                <span>Cybersecurity Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <div className="join-us-section">
        <h2>Join Us on Our Journey</h2>
        <p>
          We invite you to be a part of our story. Whether you’re a potential
          client, a partner, or someone looking to join our talented team, we
          would love to work with you and achieve new milestones together.
        </p>
        <Link to="/drpsoftwarecontact">
          <button className="get-started">Get in Touch</button>
        </Link>
      </div>
      <Footer />
      <Modal
        title="Register for SAARDRP Software Solutions"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ serviceName: "SAARDRP Software Solutions " }}
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
              <Option value=" SAARDRP Software Solutions ">
                SAARDRP Software Solutions
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

export default DrpSoftwareSolHome;
