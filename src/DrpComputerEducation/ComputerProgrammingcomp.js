import { Button, Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import React, { useState } from "react";
import Footer from "../components/Footer";
import allInOneImg from "../images/compprogramming.webp";
import cProgrammingImg from "../images/cprigraming.webp";
import cppProgrammingImg from "../images/cplus.webp";
import pythonImg from "../images/python.webp";
import advPythonImg from "../images/advpy.webp";
import coreJavaImg from "../images/javanew.webp";
import advJavaImg from "../images/advjava.webp";
import csharpImg from "../images/csharp.webp";
import aspNetImg from "../images/aspnet.webp";
import htmlCssImg from "../images/htmlcss.webp";
import sqlImg from "../images/sql.jpeg";
import mysqlImg from "../images/mysql.jpeg";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";

const courses = [
  {
    title: "Computer Programming – All in One",
    description:
      "A comprehensive course covering multiple programming languages. Includes C, C++, Python, Java, SQL, and web development basics. Ideal for beginners.",
    image: allInOneImg,
  },
  {
    title: "C Programming",
    description:
      "Covers system programming, embedded systems, and software development. Teaches data structures, pointers, memory management, and file handling.",
    image: cProgrammingImg,
  },
  {
    title: "C++ Programming",
    description:
      "An extension of C with OOP features. Used in game development, system software, and high-performance applications. Covers classes, inheritance, and polymorphism.",
    image: cppProgrammingImg,
  },
  {
    title: "Python Programming",
    description:
      "A high-level, beginner-friendly language widely used in AI, data science, and web development. Covers loops, functions, file handling, and OOP.",
    image: pythonImg,
  },
  {
    title: "Advanced Python Programming",
    description:
      "In-depth Python concepts like multi-threading, data analysis, and frameworks (Django, Flask). Hands-on experience in machine learning and web development.",
    image: advPythonImg,
  },
  {
    title: "Core Java",
    description:
      "Covers Java fundamentals, OOP principles, and basic Java applications. Includes variables, loops, exception handling, and file management.",
    image: coreJavaImg,
  },
  {
    title: "Advanced Java",
    description:
      "Focuses on enterprise-level applications using frameworks like Spring and Hibernate. Covers JDBC, Servlets, JSP, and multithreading.",
    image: advJavaImg,
  },
  {
    title: "C# Programming",
    description:
      "Developed by Microsoft, used for Windows applications and game development (Unity). Supports OOP and integrates with .NET frameworks.",
    image: csharpImg,
  },
  {
    title: "ASP.NET",
    description:
      "A Microsoft framework for building web applications and dynamic websites. Uses C# and integrates with databases like SQL Server.",
    image: aspNetImg,
  },
  {
    title: "HTML & CSS",
    description:
      "Fundamental technologies for building websites. HTML structures web pages, while CSS styles them. Essential for front-end developers.",
    image: htmlCssImg,
  },
  {
    title: "SQL",
    description:
      "Used for managing and querying databases. Covers CRUD operations, joins, indexing, and transactions. Essential for data analysts and backend developers.",
    image: sqlImg,
  },
  {
    title: "MySQL",
    description:
      "A popular open-source RDBMS used in web applications and enterprise solutions. Supports SQL queries and integrates with PHP, Python, and Java.",
    image: mysqlImg,
  },
];

const ComputerProgrammingcomp = () => {
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/contact-form-drp-register",
        values
      );
      message.success(
        response.data.message || "Application submitted successfully!"
      );
      form.resetFields();
      setIsModalVisible(false);
    } catch (error) {
      message.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <DrpCompHeader />
      <DrpCompNavbar />
      <div className="trending-courses-container">
        <h1 className="trending-courses-title">Computer Programming Courses</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text">
          Want to enhance your skills? Join our Trending Courses today!
        </h1>

        <button onClick={showModal}>Apply Now</button>
      </div>
      <Footer />
      <Modal
        title="Register for  Computer Programming Courses"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="apply-modal"
      >
        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            serviceName: "Computer Programming Courses",
          }}
          className="apply-form"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            className="form-item"
          >
            <Input placeholder="Enter your name" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
                type: "email",
              },
            ]}
            className="form-item"
          >
            <Input placeholder="Enter your email" className="input-field" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="contact"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
            className="form-item"
          >
            <Input
              placeholder="Enter your phone number"
              className="input-field"
            />
          </Form.Item>

          <Form.Item
            label="Select Service"
            name="serviceName"
            className="form-item"
          >
            <Select className="select-field">
              <Option value="Computer Programming Courses">
                Computer Programming Courses
              </Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="submit-btn"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ComputerProgrammingcomp;
