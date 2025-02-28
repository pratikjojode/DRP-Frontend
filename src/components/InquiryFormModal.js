import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Button,
  message,
  Spin,
  Row,
  Col,
} from "antd";
import axios from "axios";
import "../styles/InquiryFormModal.css"; // Import custom styles

const InquiryFormModal = ({ visible, onCancel, onOk, courseTitle }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // Loading state for Submit button

  const handleFinish = async (values) => {
    setLoading(true);
    const inquiryData = { ...values, courseName: courseTitle };

    try {
      await axios.post("/api/v1/inquiry/inquiry", inquiryData);
      message.success("Inquiry submitted successfully!");
      form.resetFields();
      onOk();
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      message.error("Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={`Inquiry for ${courseTitle}`}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel} className="modal-btn cancel-btn">
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => form.submit()}
          className="modal-btn submit-btn"
          disabled={loading}
        >
          {loading ? <Spin size="small" /> : "Submit"}
        </Button>,
      ]}
      className="inquiry-modal"
      centered
      width={600}
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
        <Row gutter={16}>
          {/* Left Column */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item
              label="Your Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item
              label="Your Contact Number"
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
              ]}
            >
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item
              label="Education Level"
              name="educationLevel"
              rules={[
                {
                  required: true,
                  message: "Please select your education level!",
                },
              ]}
            >
              <Select className="modal-input">
                <Select.Option value="High School">High School</Select.Option>
                <Select.Option value="Undergraduate">
                  Undergraduate
                </Select.Option>
                <Select.Option value="Postgraduate">Postgraduate</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="University Name" name="universityName">
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item label="City" name="city">
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item label="Country" name="country">
              <Input className="modal-input" />
            </Form.Item>
          </Col>

          {/* Right Column */}
          <Col xs={24} sm={12}>
            <Form.Item
              label="Course Name"
              name="courseName"
              initialValue={courseTitle}
            >
              <Input disabled className="modal-input" />
            </Form.Item>

            <Form.Item
              label="Inquiry Type"
              name="inquiryType"
              rules={[
                { required: true, message: "Please select the inquiry type!" },
              ]}
            >
              <Select className="modal-input">
                <Select.Option value="General">General</Select.Option>
                <Select.Option value="Admissions">Admissions</Select.Option>
                <Select.Option value="Financial Aid">
                  Financial Aid
                </Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Preferred Contact Method"
              name="preferredContactMethod"
            >
              <Select className="modal-input">
                <Select.Option value="Email">Email</Select.Option>
                <Select.Option value="Phone">Phone</Select.Option>
                <Select.Option value="In-person">In-person</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Preferred Time" name="preferredTime">
              <Input className="modal-input" />
            </Form.Item>

            <Form.Item label="Referral Source" name="referralSource">
              <Input className="modal-input" />
            </Form.Item>
          </Col>
        </Row>

        {/* Full-Width Message Field */}
        <Form.Item
          label="Your Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input.TextArea className="modal-textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InquiryFormModal;
