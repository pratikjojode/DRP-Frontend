import React from "react";
import "../styles/Notfoundz404.css"; // Import the CSS file for styling

const NotFound404 = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found.</p>
        <p className="not-found-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="not-found-button">
          Go Back Home
        </a>
      </div>
      <div className="not-found-animation">
        <div className="astronaut">
          <img
            src="https://assets.codepen.io/1538474/astronaut.svg"
            alt="Astronaut"
          />
        </div>
        <div className="planet">
          <img
            src="https://assets.codepen.io/1538474/planet.svg"
            alt="Planet"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
