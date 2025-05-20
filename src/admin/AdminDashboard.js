import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBlog,
  FaBook,
  FaSignOutAlt,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";
import Courses from "./Courses";
import Blogs from "./Blogs";
import Users from "./Users";
import InquiryForm from "./InquiryForm";
import LoadingSpinner from "../components/LoadingSpinner";
import Adminfeedbacks from "./Adminfeedbacks";

import "../styles/AdminDashboard.css";
import drpmain from "../images/DRP_new1.png";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [selectedContent, setSelectedContent] = useState("users");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Panel - DRP";
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const menuItems = [
    { id: "users", label: "Users", icon: <FaUser /> },
    { id: "blogs", label: "Blogs", icon: <FaBlog /> },
    { id: "courses", label: "Courses", icon: <FaBook /> },
    { id: "inquiry", label: "Inquiry", icon: <FaCommentDots /> },
    { id: "Feedback", label: "Feedback", icon: <FaCommentDots /> },
  ];

  const handleContentChange = (content) => {
    setLoading(true);
    setSelectedContent(content);
    setIsSidebarOpen(false);
    setTimeout(() => setLoading(false), 200);
  };

  if (loading)
    return (
      <div className="loading-spinner">
        <LoadingSpinner />
      </div>
    );

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "users":
        return <Users />;
      case "blogs":
        return <Blogs />;
      case "courses":
        return <Courses />;
      case "inquiry":
        return <InquiryForm />;
      case "Feedback":
        return <Adminfeedbacks />;
      default:
        return <p>Invalid Content</p>;
    }
  };

  return (
    <>
      <div className={`dashboard-container ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <img src={drpmain} alt="drp" width="160px" />
          <h3>DRP Admin Dashboard</h3>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleContentChange(item.id)}
                className={selectedContent === item.id ? "active" : ""}
              >
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
            <li onClick={handleLogout} className="logout-button">
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div className="main-content">
          <header className="header">
            <div className="logo">
              <h1>DRP Admin Panel</h1>
            </div>
            <div className="header-right">
              <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </div>
            </div>
          </header>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
