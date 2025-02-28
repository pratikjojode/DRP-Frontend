import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/BlogDetails.css"; // Corrected CSS import

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch blog details by ID
  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await fetch(`/api/v1/blogs/getblogs/${id}`);
        const data = await response.json();

        if (response.ok) {
          setBlog(data.blog);
        } else {
          console.error("Error fetching blog:", data.message);
        }
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogById();
  }, [id]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="blog-container">
        {loading ? (
          <div className="blog-loading-spinner"></div>
        ) : blog ? (
          <div className="blog-content-wrapper">
            <h2 className="blog-title">#{blog.title}</h2>
            <img
              src={`/${blog.image.replace(/\\/g, "/")}`}
              alt={blog.title}
              className="blog-thumbnail"
            />
            <p className="blog-published-date">
              Published on: {new Date(blog.createdAt).toDateString()}
            </p>
            <p className="blog-category-label">
              Category: {blog.category || "General"}
            </p>
            <p className="blog-author-name">
              <strong>Author:</strong>{" "}
              {blog.author && blog.author.name ? blog.author.name : "Unknown"}
            </p>
            <p className="blog-text-content">
              1:
              {blog.content}
            </p>
          </div>
        ) : (
          <p className="blog-not-found">Blog not found.</p>
        )}
        <button className="back-btn" onClick={() => navigate(-1)}>
          Back to Blogs
        </button>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
