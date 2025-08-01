import React, { useRef } from "react";
import styles from "../styles/Drpheader.css";

const DrpEeduHeader = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start();
  };

  return (
    <div className="header-main">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="4"
        className="marquee"
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          "Strategic Alliance for Admissions, Recruitement, Development, and
          Resource Planning" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          <i className="fa-solid fa-envelope"></i> Email:
          indiaabroadedu@drp.org.in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          <i className="fa-solid fa-phone"></i> Call us: +91 9699657891
        </span>
      </marquee>
    </div>
  );
};

export default DrpEeduHeader;
