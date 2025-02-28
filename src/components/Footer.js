import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import logo from "../images/DRP_group1.png"; // Update with your logo
import "../styles/Footer.css"; // Import CSS

const Footer = () => {
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleRegister = async (values) => {
    setRegisterLoading(true);
    try {
      const response = await axios.post("/api/v1/auth/register", values, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      message.success("Subscribed successfully to Drp check your email!!");
    } catch (error) {
      message.error("Failed to register user");
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <p>
            &copy; {new Date().getFullYear()} DRP Groups. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="fas fa-envelope"></i> Contact
              </Link>
            </li>
            <li>
              <Link to="/services">
                <i className="fas fa-cogs"></i> Services
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <i className="fas fa-blog"></i> Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Register Form */}
        <div className="footer-register">
          <h3>Stay Updated! 📩 Subscribe to Our Newsletter</h3>

          <Form
            onFinish={handleRegister}
            layout="vertical"
            className="register-form"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                prefix={<i className="fas fa-user"></i>}
                placeholder="Enter your name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                prefix={<i className="fas fa-envelope"></i>}
                type="email"
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "password is required" }]}
            >
              <Input
                prefix={<i className="fas fa-envelope"></i>}
                type="password"
                placeholder="Enter your  New password"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={registerLoading}
              block
            >
              Subscribe Now 🚀
            </Button>
          </Form>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/DrDRPGroup" target="_blank">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/drdrpgroup" target="_blank">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCW9vVLLGyc6SeOP9YgZVECA"
                target="_blank"
              >
                <i className="fab fa-youtube"></i> Youtube
              </a>
            </li>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <h4 className="footer-drp-abroad">
              DRPIndia&Abroad
              <br />
              Education
            </h4>
            <li>
              <Link to="/service1">• Abroad Education</Link>
            </li>
            <li>
              <Link to="/service6">• Passport & Visa</Link>
            </li>
            <li>
              <Link to="/service7">• Travel & Tourism</Link>
            </li>
            <li>
              <Link to="/service8">• Immigration</Link>
            </li>
            <li>
              <Link to="/service9">• Air Ticket Booking</Link>
            </li>
            <li>
              <Link to="/service10">• Dummy Ticket</Link>
            </li>

            <li>
              <Link to="/service5">• Accommodation</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-ser">Our Services</h3>
          <ul>
            <h4 className="footer-drp-sol">
              DRPSoftwareSolutions
              <br />
            </h4>
            <li>
              <Link to="/softwaresol/SoftwareDevelopment">
                •Software Development
              </Link>
            </li>
            <li>
              <Link to="/softwaresol/Training">•Traning</Link>
            </li>
            <li>
              <Link to="/softwaresol/Internship">• Internship</Link>
            </li>
            <li>
              <Link to="/softwaresol/projects">•Projects</Link>
            </li>
            <li>
              <Link to="/softwaresol/educ">• Educational</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <h4 className="footer-drp-edu">
              DRPComputer
              <br />
              Education
            </h4>
            <li>
              <Link to="/courses/Trending-Courses">• MSCIT</Link>
            </li>
            <li>
              <Link to="/courses/Graphic-Designing">• Graphic Designing</Link>
            </li>
            <li>
              <Link to="/courses/Marketing-Video-Editing">
                • Marketing & Video Editing
              </Link>
            </li>
            <li>
              <Link to="/courses/Computer-Programming">
                • Computer Programming
              </Link>
            </li>
            <li>
              <Link to="/courses/Hardware-Course">• Hardware Courses</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> 123 Main Street,
            <br /> City, Country
          </p>
          <p>
            <strong>Email:</strong>
          </p>
          <ul>
            <li>
              <a href="mailto:info@drp.com">info@drp.org.in</a>
            </li>
            <li>
              <a href="mailto:indiaabroadedu@drp.org.in">
                indiaabroadedu@drp.org.in
              </a>
            </li>
            <li>
              <a href="mailto:softwaresolutions@drp.org.in">
                softwaresolutions@drp.org.in
              </a>
            </li>
            <li>
              <a href="mailto:comptraning@drp.com">comptraning@drp.org.in</a>
            </li>
            <li>
              <a href="mailto:ceo@drp.com">ceo@drp.org.in</a>
            </li>
            <li>
              <a href="mailto:support@drp.com">support@drp.org.in</a>
            </li>
          </ul>
          <p>
            <strong>Phone:</strong> +91 7058857891
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
