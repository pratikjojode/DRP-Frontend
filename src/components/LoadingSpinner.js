import React from "react";
import "../styles/LoadingSpinner.css"; // Assuming the CSS is in this file

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
