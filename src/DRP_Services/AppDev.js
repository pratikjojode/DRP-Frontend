import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Appdev.css"; // Import regular CSS file
import appDevImage from "../images/app.jpg"; // Add an image for visual appeal

const AppDev = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="app-development-wrapper">
        <div className="app-hero-section">
          <img
            src={appDevImage}
            alt="App Development"
            className="app-hero-image"
          />
        </div>

        <div className="app-content-section">
          <h2 className="app-section-title">Types of App Development</h2>
          <div className="app-card-container">
            <div className="app-card">
              <h3 className="app-card-title">Mobile App Development</h3>
              <p className="app-card-description">
                Mobile app development focuses on creating applications
                specifically for mobile devices like Android and iOS.
              </p>
              <ul className="app-card-list">
                <li className="app-card-item">
                  <strong>Native Development:</strong> Platform-specific apps
                  using Java/Kotlin (Android) or Swift/Objective-C (iOS).
                </li>
                <li className="app-card-item">
                  <strong>Cross-Platform Development:</strong> Single codebase
                  for both platforms using Flutter, React Native, or Xamarin.
                </li>
              </ul>
            </div>

            <div className="app-card">
              <h3 className="app-card-title">Progressive Web Apps (PWAs)</h3>
              <p className="app-card-description">
                PWAs are web applications that behave like native apps, offering
                features like offline access and push notifications.
              </p>
              <ul className="app-card-list">
                <li className="app-card-item">
                  Built using HTML, CSS, and JavaScript (React, Vue, Angular).
                </li>
                <li className="app-card-item">
                  No need for app store distribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AppDev;
