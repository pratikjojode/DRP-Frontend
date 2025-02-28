import React, { useRef } from "react";

const DrpCompHeader = () => {
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
            DRP Computer Education & Traning Institute
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i> Email:
            comptraning@drp.org.in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            <i className="fa-solid fa-phone"></i> Call us: +91 XXXXXXXX0000
          </span>
        </marquee>
      </div>
    </>
  );
};

export default DrpCompHeader;
