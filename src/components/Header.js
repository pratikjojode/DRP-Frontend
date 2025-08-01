import React, { useState, useRef } from "react";
import "../styles/header.css";
import ChatComponent from "../components/ChatComponent";

const Header = () => {
  const [showChat, setShowChat] = useState(false);
  const marqueeRef = useRef(null);

  const user = { _id: "65123abc1234567890abcdef", name: "John Doe" };
  const room = "DRP Chat Room";

  const handleMouseEnter = () => {
    marqueeRef.current.stop();
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start();
  };

  return (
    <>
      {/* Marquee Header */}
      <div
        className="header-main"
        style={{
          backgroundColor: "#003366",
          color: "white",
          padding: "10px 0",
        }}
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ whiteSpace: "nowrap", display: "block", width: "100%" }}
        >
          <span style={{ marginRight: "50px" }}>
            "Strategic Alliance for Admissions, Recruitement, Development, and
            Resource Planning"
          </span>
          <span style={{ marginRight: "50px" }}>
            <i className="fa-solid fa-envelope"></i> Email: info@drp.org.in
          </span>
          <span style={{ marginRight: "50px" }}>
            <i className="fa-solid fa-phone"></i> Call us: +91 9699657891
          </span>
        </marquee>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="floating-chat-btn"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "50%",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {showChat && (
        <div
          className="floating-chat-window"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "300px",
            maxHeight: "400px",
            overflow: "hidden",
          }}
        >
          <ChatComponent user={user} room={room} />
        </div>
      )}
    </>
  );
};

export default Header;
