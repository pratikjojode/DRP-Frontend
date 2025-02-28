import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  message,
  Card,
  Row,
  Col,
  Form,
  Input,
  Modal,
  Table,
} from "antd";
import "../styles/Users.css"; // Make sure you have the custom styles for users

const { Meta } = Card;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // For toggling between grid and table view

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/v1/users/admin/users", {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      setUsers(response.data);
    } catch (error) {
      message.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  // Handle user deletion
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/api/v1/users/admin/deleteusers/${userId}`, {
          headers: { "x-auth-token": localStorage.getItem("token") },
        });
        message.success("User deleted successfully!");
        fetchUsers(); // Refresh the users list
      } catch (error) {
        message.error("Failed to delete user.");
      }
    }
  };

  // Update user role (e.g., admin/user)
  const handleRoleUpdate = async (userId, role) => {
    try {
      await axios.put(
        `/api/v1/users/admin/updateuserrole/${userId}`,
        { role },
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      message.success("User role updated successfully!");
      fetchUsers(); // Refresh the users list
    } catch (error) {
      message.error("Failed to update user role.");
    }
  };

  // Handle user registration
  const handleRegister = async (values) => {
    setRegisterLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/register", values, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      message.success(response.data.message);
      fetchUsers(); // Refresh the users list
      setIsModalVisible(false); // Close the registration modal
    } catch (error) {
      message.error("Failed to register user");
    } finally {
      setRegisterLoading(false);
    }
  };

  // Show the registration modal
  const showRegisterModal = () => {
    setIsModalVisible(true);
  };

  // Close the registration modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Calculate user stats
  const getUserStats = () => {
    const totalUsers = users.length;
    const totalAdmins = users.filter((user) => user.role === "admin").length;
    const totalRegularUsers = totalUsers - totalAdmins;

    return {
      totalUsers,
      totalAdmins,
      totalRegularUsers,
    };
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { totalUsers, totalAdmins, totalRegularUsers } = getUserStats();

  // Table Columns for Table View
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => <span>{role === "admin" ? "Admin" : "User"}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <Button
            onClick={() =>
              handleRoleUpdate(
                record._id,
                record.role === "admin" ? "user" : "admin"
              )
            }
            type="primary"
            size="small"
            style={{ marginRight: 5 }}
          >
            {record.role === "admin" ? "Make User" : "Make Admin"}
          </Button>
          <Button
            onClick={() => handleDelete(record._id)}
            size="small"
            className="btn-delete"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="users-container">
      {/* User Stats Section */}
      <div className="user-stats">
        <h3>User Stats</h3>
        <div className="stat">
          <p>Total Users: {totalUsers}</p>
          <p>Total Admins: {totalAdmins}</p>
          <p>Total Regular Users: {totalRegularUsers}</p>
        </div>
      </div>

      {/* Toggle View Button */}
      <Button
        type="default"
        onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}
        style={{ marginBottom: "20px" }}
      >
        Switch to {viewMode === "grid" ? "Table View" : "Grid View"}
      </Button>

      {/* User Cards Section (Grid View) */}
      {viewMode === "grid" && (
        <Row gutter={[16, 16]} justify="center">
          {users.map((user) => (
            <Col xs={24} sm={12} md={8} lg={6} key={user._id}>
              <Card
                hoverable
                className="user-card"
                cover={
                  <img
                    alt="user"
                    src={`https://randomuser.me/api/portraits/lego/${Math.floor(
                      Math.random() * 10
                    )}.jpg`}
                  />
                }
                actions={[
                  <Button
                    onClick={() =>
                      handleRoleUpdate(
                        user._id,
                        user.role === "admin" ? "user" : "admin"
                      )
                    }
                    type="primary"
                    size="small"
                  >
                    {user.role === "admin" ? "Make User" : "Make Admin"}
                  </Button>,
                  <Button
                    onClick={() => handleDelete(user._id)}
                    size="small"
                    className="btn-delete"
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Meta title={user.username} description={user.email} />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* User Table Section */}
      {viewMode === "table" && (
        <Table
          dataSource={users}
          columns={columns}
          loading={loading}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      )}

      {/* Add User Button */}
      <Button
        type="primary"
        onClick={showRegisterModal}
        style={{ marginTop: "20px" }}
      >
        Register New User
      </Button>

      {/* Registration Modal */}
      <Modal
        title="Register New User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleRegister} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={registerLoading}
            block
          >
            Register
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Users;
