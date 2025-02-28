import React from "react";
import "../styles/FeedbackPage.css";
import "../styles/FeedbackForm.css";
import FeedbackForm from "../components/FeedbackForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DrpEduNavbar from "../components/DrpEduNavbar";
import feedbackImage from "../images/feedback.png"; // Ensure this image is in the correct folder

const FeedbackPage = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />

      <div className="feedback-page">
        {/* Left Side - Image & Introduction */}
        <div className="feedback-left">
          <img src={feedbackImage} alt="Feedback" className="feedback-image" />
          <div className="feedback-text">
            <h1>We Value Your Feedback</h1>
            <p>
              Your feedback helps us improve our services and provide a better
              experience for everyone.
            </p>
          </div>
        </div>

        {/* Right Side - Feedback Form & Extra Sections */}
        <div className="feedback-right">
          <FeedbackForm />

          {/* Additional Information Section */}
          <div className="feedback-info">
            <h3>Why Your Feedback Matters</h3>
            <p>
              We take every feedback seriously to improve our platform. Let us
              know your thoughts!
            </p>
          </div>

          {/* Contact Support Section */}
          <div className="feedback-support">
            <h3>Need Assistance?</h3>
            <p>
              If you have any concerns, feel free to{" "}
              <a href="/contact">contact our support team</a>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeedbackPage;
