import React, { useRef } from "react";

const DrpSolHeader = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start();
  };
  return (
    <>
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
            softwaresolutions@drp.org.in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            <i className="fa-solid fa-phone"></i> Call us: +91 7058857891
          </span>
        </marquee>
      </div>
    </>
  );
};

export default DrpSolHeader;
