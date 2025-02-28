import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import CourseInquiryForm from "../components/CourseInquiryForm";
import "../styles/courseDetail.css"; // Updated CSS

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/api/v1/courses/courses/${id}`);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p className="loading-text">Loading course details...</p>;
  if (!course) return <p className="error-text">Course not found.</p>;

  return (
    <>
      <Header />
      <Navbar />
      <div className="course-detail-container">
        {/* Left: Course Details */}
        <div className="course-info">
          <h1>{course.title}</h1>
          <img
            src={`/${course.image}`}
            alt={course.title}
            className="course-image"
          />
          <p className="course-description">{course.description}</p>
          <h3>Price: {course.price}</h3>
          <button className="enroll-button">Enroll Now</button>
        </div>

        {/* Right: Inquiry Form */}
        <div className="inquiry-form">
          <h2>Have Questions? Inquire Now!</h2>
          <CourseInquiryForm courseTitle={course.title} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetail;
