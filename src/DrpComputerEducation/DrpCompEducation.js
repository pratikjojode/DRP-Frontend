import React, { useState } from "react";
import {
  Carousel,
  Card,
  message,
  Form,
  Select,
  Modal,
  Input,
  Button,
} from "antd";
import {
  ReadOutlined,
  CodeOutlined,
  BgColorsOutlined,
  ToolOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons";
import DrpCompHeader from "./DrpCompHeader";
import DrpCompNavbar from "./DrpCompNavbar";
import Footer from "../components/Footer";
import styles from "../styles/DrpCompEducation.css";
import mscit from "../images/mscit.webp";
import klictally from "../images/klic.webp";
import advancedms from "../images/admsoffice.webp";
import ciatrending from "../images/cia.webp";
import cprogramming from "../images/cpp.webp";
import cppprogramming from "../images/cpp.webp";
import pythonprogramming from "../images/python11.webp";
import advancedjava from "../images/java11.webp";
import adobephotoshop from "../images/adobe.webp";
import adobeillustrator from "../images/adobeill.webp";
import adobeindesign from "../images/graphics.webp";
import graphicdesignbasics from "../images/graphicdes.webp";
import autodeskcad from "../images/autodeskcad.webp";
import autocad from "../images/autocad.webp";
import autocadmechanical from "../images/autocadmechanical.webp";
import autocadcivil from "../images/autocadcivil.webp";
import max3ds from "../images/3dmax.webp";
import revit from "../images/revit.webp";
import revitmep from "../images/revitmep.webp";
import vray from "../images/vray.jpg";
import networkingessentials from "../images/networkess.webp";
import ccna from "../images/ccna.webp";
import cybersecurity from "../images/cybesecuirty.webp";
import ethicalhacking from "../images/ethical-hacking.webp";
import axios from "axios";

const { Meta } = Card;

const courses = [
  {
    category: "Trending Courses",
    icon: <ReadOutlined />,
    link: "/courses/Trending-Courses",
    items: [
      {
        name: "MS - CIT",
        image: mscit,
        description: "Master the basics of computer applications with MS-CIT.",
      },
      {
        name: "KLiC Tally",
        image: klictally,
        description: "Learn accounting and financial management with Tally.",
      },
      {
        name: "Advanced MS - Office",
        image: advancedms,
        description: "Become proficient in advanced MS Office tools.",
      },
      {
        name: "CIA - Trending Course",
        image: ciatrending,
        description: "Explore the Certified Internal Auditor program.",
      },
    ],
  },
  {
    category: "Computer Programming",
    icon: <CodeOutlined />,
    link: "/courses/Computer-Programming",
    items: [
      {
        name: "C Programming",
        image: cprogramming,
        description: "Learn the fundamentals of C programming.",
      },
      {
        name: "C++ Programming",
        image: cppprogramming,
        description: "Master object-oriented programming with C++.",
      },
      {
        name: "Python Programming",
        image: pythonprogramming,
        description: "Start your journey with Python programming.",
      },
      {
        name: "Advanced Java",
        image: advancedjava,
        description: "Dive deep into advanced Java concepts.",
      },
    ],
  },
  {
    category: "Graphic Designing",
    icon: <BgColorsOutlined />,
    link: "/courses/Graphic-Designing",
    items: [
      {
        name: "Adobe Photoshop",
        image: adobephotoshop,
        description: "Create stunning visuals with Adobe Photoshop.",
      },
      {
        name: "Adobe Illustrator",
        image: adobeillustrator,
        description: "Design vector graphics with Adobe Illustrator.",
      },
      {
        name: "Adobe InDesign",
        image: adobeindesign,
        description: "Master page layout and design with InDesign.",
      },
      {
        name: "Graphic Design Basics",
        image: graphicdesignbasics,
        description: "Learn the basics of graphic design.",
      },
    ],
  },
  {
    category: "AutoDesk CAD",
    icon: <ToolOutlined />,
    link: "/courses/AutoDesk-CAD",
    items: [
      {
        name: "AutoDesk CAD",
        image: autodeskcad,
        description: "Learn 2D and 3D design with AutoDesk CAD.",
      },
      {
        name: "AutoCAD",
        image: autocad,
        description: "Master AutoCAD for precision design.",
      },
      {
        name: "AutoCAD Mechanical",
        image: autocadmechanical,
        description: "Specialize in mechanical design with AutoCAD.",
      },
      {
        name: "AutoCAD Civil",
        image: autocadcivil,
        description: "Explore civil engineering design with AutoCAD.",
      },
      {
        name: "3Ds Max",
        image: max3ds,
        description: "Create 3D models and animations with 3Ds Max.",
      },
      {
        name: "Revit",
        image: revit,
        description: "Learn Building Information Modeling (BIM) with Revit.",
      },
      {
        name: "Revit MEP",
        image: revitmep,
        description: "Master MEP systems design with Revit.",
      },
      {
        name: "V-Ray",
        image: vray,
        description: "Create photorealistic renders with V-Ray.",
      },
    ],
  },
  {
    category: "Networking & Security",
    icon: <SecurityScanOutlined />,
    link: "/courses/Networking-Security",
    items: [
      {
        name: "Networking Essentials",
        image: networkingessentials,
        description: "Understand the basics of computer networking.",
      },
      {
        name: "CCNA",
        image: ccna,
        description:
          "Prepare for Cisco Certified Network Associate certification.",
      },
      {
        name: "Cyber Security",
        image: cybersecurity,
        description: "Learn to protect systems from cyber threats.",
      },
      {
        name: "Ethical Hacking",
        image: ethicalhacking,
        description: "Explore ethical hacking and penetration testing.",
      },
    ],
  },
];

// Dynamic background colors for sections
const sectionColors = ["#f0f8ff", "#fff0f5", "#f0fff0", "#fff8dc", "#f5f5f5"];

const DrpCompEducation = () => {
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

      {/* hero section */}
      <section className="drpcomp-hero">
        <div className="drpcomp-overlay">
          <div className="drpcomp-hero-content">
            <h1>DRP</h1>
            <h2>Computer Education & Training Institute</h2>
            <p>
              Empowering individuals with cutting-edge technology skills to
              excel in the digital world.
            </p>
            <ul className="drpcomp-hero-list">
              <li>✔ Industry-focused IT training programs</li>
              <li>✔ Hands-on project-based learning</li>
              <li>✔ Expert mentors & career guidance</li>
            </ul>
            <button className="drpcomp-hero-btn" onClick={showModal}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Courses Sections with Separate Carousels */}
      {courses.map((course, index) => (
        <section
          key={index}
          className="courses-section"
          style={{
            backgroundColor: sectionColors[index % sectionColors.length],
          }}
        >
          <h2>
            {course.icon} {course.category}
          </h2>
          <Carousel
            autoplay
            dots={true}
            arrows={true}
            prevArrow={<div className="custom-prev-arrow">‹</div>}
            nextArrow={<div className="custom-next-arrow">›</div>}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {course.items.map((item, subIndex) => (
              <div key={subIndex} className="carousel-slide">
                <Card
                  hoverable
                  className="course-card"
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta title={item.name} description={item.description} />
                </Card>
              </div>
            ))}
          </Carousel>
        </section>
      ))}

      <Footer />

      <Modal
        title="Register for  DRP Computer Education & Training Institute"
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
            serviceName: " DRP Computer Education & Training Institute",
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
              <Option value="DRP Computer Education & Training Institute">
                DRP Computer Education & Training Institute
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

export default DrpCompEducation;
