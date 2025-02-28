import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, message, Select, Row, Col } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import { IoCallOutline } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { SiDucati } from "react-icons/si";
import { FiFileText } from "react-icons/fi";
import axios from "axios";
import "../styles/FormPopup.css"; // Ensure you have styles for improved UI
import drp from "../images/DRP12.png";
const { Option } = Select;

const FormPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.post("/api/v1/inquiry/basicinquiry", values);
      message.success("Inquiry submitted successfully!");
      setIsModalVisible(false);
    } catch (error) {
      message.error("Form submission failed!");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img src={drp} alt="DRP Logo" style={{ width: "50px" }} />
            <span>Submit Your Inquiry</span>
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="popup-form"
      >
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            name: "",
            email: "",
            educationLevel: "",
            city: "",
            inquiryAbout: "",
            contact: "",
            message: "",
          }}
        >
          <Row gutter={16}>
            {/* Left Column */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your name"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="Contact"
                name="contact"
                rules={[
                  { required: true, message: "Please enter your contact!" },
                ]}
              >
                <Input
                  prefix={<IoCallOutline />}
                  placeholder="Enter your contact number"
                />
              </Form.Item>

              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city!" }]}
              >
                <Input placeholder="Enter your city" prefix={<FaCity />} />
              </Form.Item>
            </Col>

            {/* Right Column */}
            <Col xs={24} sm={12}>
              <Form.Item label="Education Level" name="educationLevel">
                <Select
                  placeholder="Select education level"
                  prefix={<SiDucati />}
                >
                  <Option value="High School">High School</Option>
                  <Option value="Undergraduate">Undergraduate</Option>
                  <Option value="Postgraduate">Postgraduate</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Inquiry About"
                name="inquiryAbout"
                rules={[
                  { required: true, message: "Please select an inquiry type!" },
                ]}
              >
                <Select
                  placeholder="Select inquiry type"
                  prefix={<FiFileText />}
                >
                  <Option value="DRP India & Abroad Education and Recruitment Services">
                    DRP India & Abroad Education and Recruitment Services
                  </Option>
                  <Option value="DRP Software Solutions Pvt Ltd">
                    DRP Software Solutions Pvt Ltd
                  </Option>
                  <Option value="DRP Computer Education and Training Institute">
                    DRP Computer Education and Training Institute
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item label="Message" name="message">
                <Input
                  prefix={<MessageOutlined />}
                  placeholder="Enter your message (optional)"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Submit Inquiry
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormPopup;
