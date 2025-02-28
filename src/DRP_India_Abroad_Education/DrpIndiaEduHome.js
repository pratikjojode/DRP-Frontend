import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/DrpIndiaEduHome.css";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import canada from "../images/canada.png";
import brazil from "../images/brazil.png";
import japan from "../images/japan.png";
import australia from "../images/australia.png";
import italy from "../images/italy.png";
import france from "../images/france.png";
import tokyo from "../images/Cardiff University.jpg";
import chicogo from "../images/keele_hall_reflect.jpg";
import price from "../images/price.jpg";
import yale1 from "../images/yale-university-1604157_1920.jpg";
import charles from "../images/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg";
import london1 from "../images/charles-postiaux-Q6UehpkBSnQ-unsplash.jpg";
import france1 from "../images/rodrigo-kugnharski-pdWc5wm1STw-unsplash.jpg";
import aus from "../images/dan-freeman-7Zb7kUyQg1E-unsplash.jpg";
import Usa from "../images/ferdinand-stohr-PeFk7fzxTdk-unsplash.jpg";
import Can from "../images/University of Bristol.jpg";
import russia from "../images/michael-parulava-L4jrg4c7928-unsplash.jpg";
import germany from "../images/ansgar-scheffold-mtfTz0FnwBw-unsplash.jpg";
import Italy from "../images/cristina-gottardi-I1Lv2yX67GI-unsplash.jpg";
import Cana from "../images/james-thomas-UG-m_ngzMFM-unsplash.jpg";
import london from "../images/london.jpg";
import oxford from "../images/oxford.jpg";
import Mit from "../images/MIT.jpg";
import peking from "../images/peking.jpg";
import peking2 from "../images/University of Edinburgh.jpg";
import penssy from "../images/penssy.jpg";
import penss2 from "../images/University of Glasgow.jpg";
import Mit2 from "../images/University of Oslo Norway.jpeg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Carousel, message } from "antd";
import lookup from "socket.io-client";
import axios from "axios";
import { Link } from "react-router-dom";
import DrpEeduHeader from "../components/DrpEeduHeader";
const DrpIndiaEduHome = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      image: france,
      review: "Great product! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: canada,
      review: "Amazing quality and fast delivery.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: france,
      review: "Exceeded my expectations. Will buy again!",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: london,
      review: "Good value for money. Satisfied with my purchase.",
    },
    {
      id: 5,
      name: "Robert Wilson",
      image: yale1,
      review: "Fantastic customer service and great product!",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
  });
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const response = await axios.post(
        "/api/v1/inquiry/counsellingform",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        message.success("Counseling sent successfully");

        setFormData({
          name: "",
          email: "",
          message: "",
          country: "",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      message.error("Failed to send counseling request");
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    document.title = "DRP India And Abroad Education and Recruitment Services"; // Change the tab title
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // fetch blogss

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

  return (
    <div className="drp-india-edu-home">
      <DrpEeduHeader />

      <DrpEduNavbar />

      {/* main content  */}
      <div className="home-con">
        <Carousel autoplay effect="fade" dots={false} arrows={true}>
          <div className="home-slide">
            <img src={yale1} alt="Slide 1" className="hero-image" />
            <div className="slide-text">
              <h2>Discover Education at Yale</h2>
              <p>
                Explore world-renowned academic opportunities at Yale
                University.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={london1} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in London</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={Can} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in France</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={aus} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in Australia</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={russia} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in Russia</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={germany} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in Germany</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={Italy} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in Italy</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={Usa} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in USA</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={Cana} alt="Slide 2" className="hero-image" />
            <div className="slide-text">
              <h2>Study in Canada</h2>
              <p>
                Experience vibrant cultural diversity and excellence in
                education.
              </p>
            </div>
          </div>
          <div className="home-slide">
            <img src={france1} alt="Slide 3" className="hero-image" />
            <div className="slide-text">
              <h2>Education in France</h2>
              <p>
                Embrace the charm and prestige of France’s academic
                institutions.
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Countries */}
      <div className="countries-con">
        <h1>Countries</h1>
        <p>Every country has its own cultural heritage. Travel to explore.</p>

        <div className="countries-container">
          <Carousel
            dots={true}
            infinite={true}
            arrows={true}
            autoplay
            slidesToShow={3}
            centerMode={true}
          >
            <div className="carousel-slide">
              <div className="country-card canada-bg">
                <img alt="Canada" src={canada} />
                <h2>Learn in Canada</h2>
                <p>Canada is the second-largest country in the world...</p>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="country-card japan-bg">
                <img alt="Japan" src={japan} />
                <h2>Explore Japan</h2>
                <p>Japan is an island nation in East Asia...</p>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="country-card brazil-bg">
                <img alt="Brazil" src={brazil} />
                <h2>Discover Brazil</h2>
                <p>Brazil is the largest country in South America...</p>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="country-card australia-bg">
                <img alt="Australia" src={australia} />
                <h2>Visit Australia</h2>
                <p>Australia is renowned for its unique wildlife...</p>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="country-card italy-bg">
                <img alt="Italy" src={italy} />
                <h2>Explore Italy</h2>
                <p>Italy is a country rich in history, culture, and art...</p>
              </div>
            </div>

            <div className="carousel-slide">
              <div className="country-card france-bg">
                <img alt="France" src={france} />
                <h2>Discover France</h2>
                <p>France is famous for its romantic ambiance...</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* study aborad */}
      <div className="study-aboard-con">
        <h1>Study Abroad Process</h1>
        <div className="study-ab-cards-con">
          <div className="study-card">
            <i className="fa-solid fa-book"></i>
            <p>
              <strong>Research Options:</strong> Choose country, course, and
              university
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-pencil"></i>
            <p>
              <strong>Prepare for Tests: </strong> Take IELTS, TOEFL, GRE, GMAT,
              SAT (if required).
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-globe"></i>
            <p>
              <strong>Gather Documents:</strong> SOP, LORs, transcripts, resume,
              passport, financial proof.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Apply to Universities :</strong> Submit applications and
              track status
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Accept Offer:</strong> Pay deposit and confirm admission.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Apply for Scholarships/Loans:</strong> Seek financial aid
              if needed.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Apply for Student Visa :</strong> Submit visa application
              and attend the interview.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Plan Accommodation & Travel :</strong> Book housing,
              flights, and insurance.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Prepare for Departure :</strong>Attend orientation, pack
              essentials, and exchange currency.
            </p>
          </div>
          <div className="study-card">
            <i className="fa-solid fa-user-graduate"></i>
            <p>
              <strong>Arrive & Settle In:</strong>Register at university, get a
              local SIM, and explore!
            </p>
          </div>
        </div>
      </div>

      {/* couseling */}
      <div className="couseling-con">
        <div className="couseling-div">
          <div className="form-section">
            <h2>Get Expert Counseling</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Preferred Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="india">India</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="Europe">Europe</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                loading={formLoading} // Show spinner when loading
                disabled={formLoading} // Optionally disable the button while loading
              >
                {formLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>

          <div className="info-section">
            <h2>Why choose our counseling India And Abroad Education?</h2>
            <p>
              We provide expert counseling for education in India and abroad,
              offering personalized guidance, university selection, application
              support, visa assistance, and scholarship advice. Our services
              include test preparation, interview coaching, and post-admission
              support, ensuring a smooth transition for students. With
              end-to-end assistance, we help you achieve your academic and
              career goals seamlessly.
            </p>
            <ul>
              <strong>
                <li>Expert guidance on university selection</li>
              </strong>
              <strong>
                <li>Assistance with application and visa process</li>
              </strong>
              <strong>
                <li>Access to scholarships and financial aid options</li>
              </strong>
              <strong>
                <li>Post-arrival support in your chosen country</li>
              </strong>
            </ul>
          </div>
        </div>
      </div>

      {/* Happy students */}
      <div className="happy-students-con">
        <h1>Happy Student Stories</h1>
        <div className="happy-students-card-main-div">
          {/* Image Card 1 */}
          <div className="happy-student-card">
            <a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-card">
                <img src={france} alt="Student Story" />
                <div className="overlay">
                  <i className="fa-solid fa-play-circle"></i>
                  <span>Watch Story</span>
                </div>
              </div>
            </a>
          </div>

          {/* Image Card 2 */}
          <div className="happy-student-card">
            <a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-card">
                <img src={france} alt="Student Story" />
                <div className="overlay">
                  <i className="fa-solid fa-play-circle"></i>
                  <span>Watch Story</span>
                </div>
              </div>
            </a>
          </div>

          {/* Image Card 3 */}
          <div className="happy-student-card">
            <a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-card">
                <img src={france} alt="Student Story" />
                <div className="overlay">
                  <i className="fa-solid fa-play-circle"></i>
                  <span>Watch Story</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button>View More</button>
      </div>

      {/* FAQ section */}

      {/* our parther univercites */}
      <h1 className="uni-text">Our Partner universities</h1>
      <div className="unversity-div-grid">
        <div className="uni-items">
          <img src={tokyo} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={chicogo} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={peking} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={penssy} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={yale1} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={oxford} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={Mit} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={penss2} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={london} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={yale1} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={peking2} alt="University 1" />
        </div>
        <div className="uni-items">
          <img src={Mit2} alt="University 1" />
        </div>
      </div>

      {/* reviews card */}
      <div className="reviews-section">
        <h1 className="reviews-title">Student Reviews</h1>
        <div className="reviews-container">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="slide">
                <div className="review-card">
                  <div className="review-img-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="review-img"
                    />
                  </div>
                  <h3 className="review-name">{item.name}</h3>
                  <p className="review-text">"{item.review}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Our blogs */}
      <div className="blog-container">
        <h1>Blogs</h1>
        {blogs.length > 0 ? (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-item">
                <h2>{blog.title}</h2>
                <img src={blog.image} alt={blog.title} />
                <p>{blog.content.substring(0, 150)}...</p>{" "}
                {/* Truncate content */}
                <Link to={`/blogs/${blog._id}`} className="read-more-btn">
                  Read More
                </Link>{" "}
                {/* Read More Link */}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-blogs">No blogs available</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DrpIndiaEduHome;
