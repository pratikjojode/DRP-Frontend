import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";
import "../styles/InquiryFormModal.css"; // Import custom styles

const InquiryFormModal = ({ visible, onCancel, onOk, courseTitle }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ courseName: courseTitle });
  }, [courseTitle, form]);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={
        <div
          style={{
            backgroundColor: "#1890ff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {`Inquiry for ${courseTitle}`}
        </div>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="inquiry-modal"
      centered
    >
      <Form form={form} onFinish={handleFinish} layout="vertical">
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
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input className="modal-input" />
        </Form.Item>

        <Form.Item
          label="Your Contact Number"
          name="contact"
          rules={[{ required: true, message: "Please input your Contact!" }]}
        >
          <Input className="modal-input" />
        </Form.Item>

        <Form.Item
          label="Your Message"
          name="message"
          rules={[{ message: "Please input your message!" }]}
        >
          <Input.TextArea className="modal-input" />
        </Form.Item>

        <Form.Item label="Course Name" name="courseName">
          <Input disabled className="modal-input" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            onClick={() => form.submit()}
            className="modal-btn submit-btn"
            loading={loading}
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InquiryFormModal;
