import React, { useEffect, useState } from "react";
// For navigation
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Modal } from "antd";
import InquiryFormModal from "../components/InquiryFormModal"; // Import the modal component
import styles from "../styles/userCourses.css";
import { useNavigate } from "react-router-dom";

const OurCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [selectedCourseTitle, setSelectedCourseTitle] = useState(""); // Store selected course title
  const navigate = useNavigate();

  const fetchAllCourses = async () => {
    try {
      const response = await axios.get("/api/v1/courses/courses");
      if (response.data.success) {
        setCourses(response.data.data.courses);
      } else {
        console.error("Error fetching courses:", response.data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Open modal with the selected course title
  const handleInquireClick = (courseTitle) => {
    setSelectedCourseTitle(courseTitle);
    setIsModalVisible(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Navigate to Course Detail Page
  const handleLearnMoreClick = (courseId) => {
    navigate(`/services/course/${courseId}`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <h1 className="center">All Courses</h1>
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length > 0 ? (
          <div className="course-list">
            {courses.map((course) => (
              <div key={course._id} className="course-card">
                <img
                  src={`/${course.image}`}
                  alt={course.title}
                  className="course-image"
                />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Price: {course.price}</p>

                <div className="course-buttons">
                  {/* Inquiry Button */}
                  <button
                    onClick={() => handleInquireClick(course.title)}
                    className="inquiry-button"
                  >
                    Inquire
                  </button>

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMoreClick(course._id)}
                    className="learn-more-button"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No courses available.</p>
        )}
      </div>

      {/* Inquiry Modal */}
      <InquiryFormModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
        courseTitle={selectedCourseTitle}
      />

      <Footer />
    </>
  );
};

export default OurCourses;
