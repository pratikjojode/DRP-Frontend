import React from "react";
import styles from "../styles/Marketing.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import marketingImage from "../images/marketing.jpg"; // Replace with actual path
import videoEditingImage from "../images/vidfe.jpg"; // Replace with actual path

const MarketingVideo = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="marketing-video-container">
        {/* Marketing Section */}
        <section className="marketing-section">
          <img
            src={marketingImage}
            alt="Marketing Concept"
            className="marketing-image"
          />
          <div className="marketing-content">
            <h2 className="marketing-title">Marketing</h2>
            <p className="marketing-description">
              Marketing involves promoting and selling products or services,
              including market research, advertising, and public relations. The
              goal is to attract and engage customers, ultimately driving sales
              and brand loyalty.
            </p>
            <ul className="marketing-list">
              <li>
                <strong>Content Marketing:</strong> Creating valuable content
                (blogs, videos, eBooks) to attract and engage customers.
              </li>
              <li>
                <strong>Digital Marketing:</strong> Using digital channels like
                websites, social media, search engines, and email to reach
                potential customers.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> Using platforms like
                Instagram, Facebook, Twitter, and LinkedIn to connect with the
                audience.
              </li>
            </ul>
          </div>
        </section>

        {/* Video Editing Section */}
        <section className="video-editing-section">
          <img
            src={videoEditingImage}
            alt="Video Editing"
            className="video-editing-image"
          />
          <div className="video-editing-content">
            <h2 className="video-editing-title">Video Editing</h2>
            <p className="video-editing-description">
              Video editing is the process of manipulating and rearranging video
              footage to create a finished product that conveys a message or
              tells a story. It involves trimming, adding effects, syncing
              audio, and creating smooth transitions between clips.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MarketingVideo;
