import React, { useEffect, useState } from "react";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";

const BlogServices = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Fetch blogs from backend API
  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/v1/blogs/getblogs"); // Adjust API URL as needed
      const data = await response.json();
      if (response.ok) {
        setBlogs(data.blogs);
      } else {
        console.error("Error fetching blogs:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <>
      <Header />
      <DrpEduNavbar />
      <div className="container">
        <h2 className="blog-title">Latest Blogs</h2>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className="blog-list">
              {currentBlogs.length > 0 ? (
                currentBlogs.map((blog) => (
                  <div className="blog-card" key={blog._id}>
                    <h3>{blog.title}</h3>
                    <img
                      src={`https://res.cloudinary.com/dnxicetc5/image/upload/${blog.image}`}
                      alt={blog.title}
                    />

                    <p className="blog-date">
                      Published on:{" "}
                      {format(new Date(blog.createdAt), "MMMM d, yyyy")}
                    </p>
                    <p className="blog-category">
                      Category: {blog.category || "General"}
                    </p>
                    <p>{blog.content.substring(0, 100)}...</p>

                    <button
                      className="read-more-btn"
                      onClick={() =>
                        (window.location.href = `/blogs/${blog._id}`)
                      }
                    >
                      Read More
                    </button>
                  </div>
                ))
              ) : (
                <p>No blogs available.</p>
              )}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastBlog >= blogs.length}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogServices;
