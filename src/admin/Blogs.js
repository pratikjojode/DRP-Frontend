import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  message,
  Upload,
  Modal,
  Table,
  Switch,
} from "antd";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import "../styles/Blogs.css"; 

const CreateBlog = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isTableView, setIsTableView] = useState(false); 


  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get("/api/v1/blogs/getblogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      message.error("Failed to fetch blogs!");
    }
  };

  // Add blog submission logic
  const handleImageChange = (info) => {
    if (info.fileList.length > 0) {
      setImage(info.fileList[0].originFileObj);
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);

    if (image) {
      formData.append("image", image);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You need to log in first!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/v1/blogs/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      });
      message.success("Blog created successfully!");
      fetchAllBlogs();
    } catch (error) {
      message.error("Failed to create blog!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (confirmDelete) {
        const token = localStorage.getItem("token");
        await axios.delete(`/api/v1/blogs/admin/deleteblogs/${id}`, {
          headers: {
            "x-auth-token": token,
          },
        });
        fetchAllBlogs();
        message.success("Blog deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      message.error("Failed to delete blog!");
    }
  };

  // Function to open the modal with the current blog data
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setEditingBlog(null);
  };

  const handleUpdate = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);

    if (image) {
      formData.append("image", image);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      message.error("You need to log in first!");
      return;
    }

    try {
      setLoading(true);
      await axios.put(
        `/api/v1/blogs/admin/updateblogs/${editingBlog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        }
      );
      message.success("Blog updated successfully!");
      fetchAllBlogs();
      handleModalClose();
    } catch (error) {
      message.error("Failed to update blog!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate stats
  const getBlogStats = () => {
    const totalBlogs = blogs.length;
    const blogsWithImages = blogs.filter((blog) => blog.image).length;
    const blogsWithoutImages = totalBlogs - blogsWithImages;

    return {
      totalBlogs,
      blogsWithImages,
      blogsWithoutImages,
    };
  };

  // Table columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img
            src={`https://res.cloudinary.com/dnxicetc5/image/upload/${image}`}
            alt="Blog"
            style={{ width: 100 }}
          />
        ) : (
          "No Image"
        ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const { totalBlogs, blogsWithImages, blogsWithoutImages } = getBlogStats();

  return (
    <div className="create-blog">
      <h2 className="create-blog-title">Create Blog</h2>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        className="create-blog-form"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter a title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter the content!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload Image">
          <Upload
            beforeUpload={() => false}
            onChange={handleImageChange}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="submit-btn"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* Blog Stats */}
      <div className="blog-stats">
        <h3>Blog Stats</h3>
        <div className="b">
          <p>Total Blogs: {totalBlogs}</p>
          <p>Blogs with Images: {blogsWithImages}</p>
          <p>Blogs without Images: {blogsWithoutImages}</p>
        </div>
      </div>

      {/* Toggle Button for Table View */}
      <div style={{ marginBottom: 16 }}>
        <Switch
          checked={isTableView}
          onChange={(checked) => setIsTableView(checked)}
          checkedChildren="Table View"
          unCheckedChildren="Grid View"
        />
      </div>

      {/* Conditional Rendering for Grid View or Table View */}
      {isTableView ? (
        <Table dataSource={blogs} columns={columns} rowKey="_id" />
      ) : (
        <div className="blogs-list">
          <h2>All Blogs</h2>
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <div className="blog-card" key={blog._id}>
                <h3 className="blog-title-main">Title: {blog.title}</h3>
                <p className="blog-content">Description: {blog.content}</p>
                {blog.image && (
                  <img
                    src={`https://res.cloudinary.com/dnxicetc5/image/upload/${blog.image}`}
                    alt={blog.title}
                  />
                )}

                <div className="blog-actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                  <button className="edit-btn" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Editing Blog */}
      <Modal
        title="Edit Blog"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        className="edit-modal"
      >
        <Form
          onFinish={handleUpdate}
          layout="vertical"
          initialValues={{
            title: editingBlog ? editingBlog.title : "",
            content: editingBlog ? editingBlog.content : "",
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please enter the content!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload
              beforeUpload={() => false}
              onChange={handleImageChange}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="submit-btn"
            >
              Update Blog
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBlog;
