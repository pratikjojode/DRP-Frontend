import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Courses.css"; // Add your custom styling for the grid
import {
  message,
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Upload,
} from "antd"; // Import components from antd
import InquiryFormModal from "../components/InquiryFormModal"; // Assuming InquiryFormModal is a modal that handles inquiries

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });
  const [updateData, setUpdateData] = useState(null); // For updating
  const [createError, setCreateError] = useState(null);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [isTableView, setIsTableView] = useState(false); // State for table view
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [selectedCourse, setSelectedCourse] = useState(null); // New state for selected course for inquiry

  // Fetch all courses when component mounts or after creating a course
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/v1/courses/courses");
        console.log(response.data); // Log the data to check the structure
        setCourses(response.data.data.courses); // Access the courses array within the data object
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch courses.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, [createSuccess]); // Refresh course list after creating a new course

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image file change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Handle form submission for creating a new course
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      // Make API call to create a course using the correct route
      await axios.post("/api/v1/courses/createcourse", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      message.success("Course Created successfully!");
      setCreateSuccess(true);
      setCreateError(null); // Reset error state on successful creation
    } catch (err) {
      setCreateError("Failed to create course.");
      setCreateSuccess(false);
    }
  };

  // Handle course deletion
  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`/api/v1/courses/admin/deletecourses/${courseId}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      message.success("Course deleted successfully!");
      // Refresh courses after deletion
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (err) {
      setError("Failed to delete course.");
    }
  };

  // Handle course update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      await axios.put(
        `/api/v1/courses/admin/updatecourses/${updateData._id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setCreateSuccess(true);
      setCreateError(null); // Reset error state on successful update
      setUpdateData(null); // Reset update form
    } catch (err) {
      setCreateError("Failed to update course.");
    }
  };

  // Set the course data for update
  const handleEdit = (course) => {
    setUpdateData(course);
    setFormData({
      title: course.title,
      description: course.description,
      price: course.price,
      image: course.image,
    });
  };

  // Toggle between grid view and table view
  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  // Table columns for antd Table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={`/${image}`}
          alt="Course"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
          <Button
            className="inquiry-btn"
            onClick={() => {
              setSelectedCourse(record); // Set the selected course for inquiry
              setIsModalVisible(true); // Open the inquiry modal
            }}
          >
            Inquiry
          </Button>
        </Space>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="courses-container">
      <h2>{updateData ? "Update Course" : "Create New Course"}</h2>
      <div className="form-card">
        <form onSubmit={updateData ? handleUpdate : handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required={!updateData}
            />
          </div>
          {createError && <div className="error">{createError}</div>}
          <button type="submit">
            {updateData ? "Update Course" : "Create Course"}
          </button>
        </form>
      </div>

      {createSuccess && (
        <div>
          {updateData
            ? "Course updated successfully!"
            : "Course created successfully!"}
        </div>
      )}

      <h2>Courses List</h2>
      <Button onClick={toggleView} style={{ marginBottom: "20px" }}>
        {isTableView ? "Switch to Grid View" : "Switch to Table View"}
      </Button>

      {isTableView ? (
        // Table View
        <Table
          dataSource={courses}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      ) : (
        // Grid View
        <div className="courses-grid">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="course-card">
                <img
                  src={`/${course.image}`}
                  alt={course.title}
                  className="course-image"
                />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Price: {course.price}</p>
                <div className="course-actions">
                  <button onClick={() => handleEdit(course)}>Edit</button>
                  <button onClick={() => handleDelete(course._id)}>
                    Delete
                  </button>
                  <button
                    className="inquiry-btn"
                    onClick={() => {
                      setSelectedCourse(course); // Set the selected course for inquiry
                      setIsModalVisible(true); // Open the inquiry modal
                    }}
                  >
                    Inquiry
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      )}

      {/* Inquiry Form Modal */}
      <InquiryFormModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
        courseTitle={selectedCourse ? selectedCourse.title : ""} // Pass the course title
      />
    </div>
  );
};

export default Courses;
