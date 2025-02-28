import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Spin,
  message,
  Button,
  Card,
  Popconfirm,
  Modal,
  Form,
  Input,
  Rate,
  Statistic,
  Row,
  Col,
} from "antd";
import "../styles/AdminFeedbacks.css";

const AdminFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({});
  const [form] = Form.useForm();

  // Fetch feedbacks
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/feedbacks/getFeedback");
      setFeedbacks(response.data);
    } catch (error) {
      message.error("Failed to fetch feedbacks");
    } finally {
      setLoading(false);
    }
  };

  const addFeedback = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/feedbacks/feedback", values);
      message.success("Feedback added successfully");
      fetchFeedbacks();
      form.resetFields();
    } catch (error) {
      console.log(error);
      message.error("Failed to add the feedback");
    } finally {
      setLoading(false);
    }
  };

  // Fetch feedback statistics
  const fetchStats = async () => {
    try {
      const response = await axios.get("/api/v1/feedbacks/feedback-stats");
      setStats(response.data);
    } catch (error) {
      message.error("Failed to fetch feedback statistics");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    fetchStats();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`/api/v1/feedbacks/deleteFeedback/${id}`);
      message.success("Feedback deleted successfully");
      setFeedbacks((prev) => prev.filter((feedback) => feedback._id !== id));
      fetchStats(); // Refresh stats after deletion
    } catch (error) {
      message.error("Failed to delete feedback");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      setLoading(true);
      await axios.put(`/api/v1/feedbacks/approveFeedback/${id}`);
      message.success("Feedback approved successfully");
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((feedback) =>
          feedback._id === id ? { ...feedback, approved: true } : feedback
        )
      );
      fetchStats(); // Refresh stats after approval
    } catch (error) {
      message.error("Failed to approve feedback");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (feedback) => {
    setSelectedFeedback(feedback);
    form.setFieldsValue(feedback);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFeedback(null);
    form.resetFields();
  };

  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      await axios.put(
        `/api/v1/feedbacks/updateFeedback/${selectedFeedback._id}`,
        values
      );
      message.success("Feedback updated successfully");
      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((feedback) =>
          feedback._id === selectedFeedback._id
            ? { ...feedback, ...values }
            : feedback
        )
      );
      handleModalClose();
      fetchStats(); // Refresh stats after update
    } catch (error) {
      message.error("Failed to update feedback");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: "User", dataIndex: "name", key: "name" },
    { title: "Feedback", dataIndex: "message", key: "message" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Contact", dataIndex: "phone", key: "phone" },
    {
      title: "Stars",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          {!record.approved && (
            <Button type="default" onClick={() => handleApprove(record._id)}>
              Approve
            </Button>
          )}
          <Button type="primary" onClick={() => handleUpdate(record)}>
            Update
          </Button>
          <Popconfirm
            title="Delete this feedback?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="admin-feedbacks-container">
      <h2>Feedbacks</h2>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="btn"
      >
        Add Feedback
      </Button>

      <Row gutter={16} className="stats-container">
        <Col span={6}>
          <Statistic
            title="Total Feedbacks"
            value={stats.totalFeedbacks || 0}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Approved Feedbacks"
            value={stats.approvedFeedbacks || 0}
            valueStyle={{ color: "green" }}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Unapproved Feedbacks"
            value={stats.unapprovedFeedbacks || 0}
            valueStyle={{ color: "red" }}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Average Rating"
            value={stats.avgRating || 0}
            suffix="⭐"
          />
        </Col>
      </Row>

      <Button
        type="primary"
        onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
      >
        Switch to {viewMode === "table" ? "Card View" : "Table View"}
      </Button>

      {viewMode === "table" ? (
        <Table
          dataSource={feedbacks}
          columns={columns}
          rowKey="_id"
          bordered
          loading={loading}
        />
      ) : (
        <div className="feedback-card-container">
          {loading ? (
            <Spin size="large" />
          ) : (
            feedbacks.map((feedback) => (
              <Card key={feedback._id}>
                <h3>{feedback.name}</h3>
                <p>
                  <strong>Email:</strong> {feedback.email}
                </p>
                <p>
                  <strong>Message:</strong> {feedback.message}
                </p>
                <p>
                  <strong>Contact:</strong> {feedback.phone}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <strong>Ratings:</strong>{" "}
                  <Rate disabled defaultValue={feedback.rating} />
                </p>
                {!feedback.approved && (
                  <Button
                    type="default"
                    onClick={() => handleApprove(feedback._id)}
                  >
                    Approve
                  </Button>
                )}
                <Button type="primary" onClick={() => handleUpdate(feedback)}>
                  Update
                </Button>
                <Popconfirm
                  title="Delete this feedback?"
                  onConfirm={() => handleDelete(feedback._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="danger">Delete</Button>
                </Popconfirm>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Add Feedback Modal */}
      <Modal
        title="Add Feedback"
        visible={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <Form form={form} onFinish={addFeedback} initialValues={{ rating: 5 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the email" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter the phone" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter the subject" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter the message" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            initialValue={5}
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Feedback
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminFeedbacks;
